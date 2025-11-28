import requests
import datetime

# Placeholder for the WhatsApp Webhook URL (e.g., from CallMeBot)
# User needs to replace this with their actual URL
WHATSAPP_WEBHOOK_URL = "YOUR_WEBHOOK_URL_HERE"

def get_viewer_info(request):
    """
    Extracts viewer information from the request.
    """
    client_host = request.client.host
    user_agent = request.headers.get("user-agent", "Unknown")
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    return {
        "ip": client_host,
        "user_agent": user_agent,
        "timestamp": timestamp
    }

def send_whatsapp_notification(info):
    """
    Sends a WhatsApp notification with viewer info.
    """
    if WHATSAPP_WEBHOOK_URL == "YOUR_WEBHOOK_URL_HERE":
        print("WhatsApp Webhook URL not configured.")
        return False

    message = f"New Portfolio Visitor!\n\nTime: {info['timestamp']}\nIP: {info['ip']}\nDevice: {info['user_agent']}"
    
    try:
        # Assuming a GET request for simple webhooks like CallMeBot
        # If using a different service, this might need to be a POST
        encoded_message = requests.utils.quote(message)
        url = f"{WHATSAPP_WEBHOOK_URL}&text={encoded_message}"
        
        response = requests.get(url)
        if response.status_code == 200:
            print("Notification sent successfully.")
            return True
        else:
            print(f"Failed to send notification. Status: {response.status_code}")
            return False
    except Exception as e:
        print(f"Error sending notification: {e}")
        return False
