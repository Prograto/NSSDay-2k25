import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
  formLink: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  eventName,
  formLink,
}) => {
  if (!isOpen) return null;

  const hasValidForm = !!formLink && formLink.trim() !== "";

  console.log("Modal Rendered with:", { eventName, formLink, hasValidForm });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-green-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Register for {eventName}</h2>
              <p className="opacity-90 mt-1">
                Fill out the registration form below
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-xl p-4 min-h-[70vh] flex items-center justify-center">
            {hasValidForm ? (
              <iframe
                src={formLink}
                title={eventName}
                className="w-[100%] h-[70vh] rounded-lg border-none"
              />
            ) : (
              <p className="text-center text-gray-600 text-lg">
                No registration form available for this event yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
