export const handleChat = () => {
    const phoneNumber = "9744789195";
    const message = "Hi! I’m interested in your service.";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  export default handleChat