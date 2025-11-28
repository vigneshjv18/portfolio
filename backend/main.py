from fastapi import FastAPI, Request, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import json
import os
import tracking

app = FastAPI()

# CORS configuration
origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load content
CONTENT_FILE = "content.json"

@app.get("/api/portfolio")
async def get_portfolio_content():
    if not os.path.exists(CONTENT_FILE):
        return {"error": "Content file not found"}
    
    with open(CONTENT_FILE, "r") as f:
        data = json.load(f)
    return data

@app.post("/api/track")
async def track_viewer(request: Request, background_tasks: BackgroundTasks):
    info = tracking.get_viewer_info(request)
    print(f"Viewer tracked: {info}")
    
    # Send notification in background to not block the response
    background_tasks.add_task(tracking.send_whatsapp_notification, info)
    
    return {"status": "tracked", "info": info}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8005)
