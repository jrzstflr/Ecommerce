"use client"
import { IoCloseOutline } from "react-icons/io5"
import { FaFacebookMessenger, FaWhatsapp, FaFacebookF, FaSms } from "react-icons/fa"

const Popup = ({ orderPopup, setOrderPopup }) => {
  const handleMessengerClick = () => {
    window.open("https://m.me/mary.andrade1221", "_blank")
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+639693134738?text=Hi, I would like to place an order", "_blank")
  }

  const handleSMSClick = () => {
    window.open("sms:+639693134738?body=Hi, I would like to place an order", "_self")
  }

  const handleFacebookClick = () => {
    window.open("https://facebook.com/mary.andrade1221", "_blank")
  }

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-card dark:bg-card rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-card-foreground font-semibold">Contact Us</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer text-card-foreground"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {/* Messenger Link */}
                <button
                  onClick={handleMessengerClick}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  <FaFacebookMessenger className="text-blue-500 text-xl" />
                  <span className="text-card-foreground">Message us on Messenger</span>
                </button>

                {/* WhatsApp Link */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  <FaWhatsapp className="text-green-500 text-xl" />
                  <span className="text-card-foreground">Chat on WhatsApp</span>
                </button>

                {/* SMS Link */}
                <button
                  onClick={handleSMSClick}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  <FaSms className="text-purple-500 text-xl" />
                  <span className="text-card-foreground">Send us an SMS</span>
                </button>

                {/* Facebook Page Link */}
                <button
                  onClick={handleFacebookClick}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  <FaFacebookF className="text-blue-600 text-xl" />
                  <span className="text-card-foreground">Visit our Facebook Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
