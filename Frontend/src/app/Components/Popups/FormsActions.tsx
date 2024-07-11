import React from "react";

interface FormsActionsProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export default function FormsActions({ onCancel, onConfirm }: FormsActionsProps) {
  return (
    <div
      id="info-popup"
      tabIndex={-1}
      className="fixed top-0 right-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Privacy info
            </h3>
            <p>
              Pastikan semua informasi sudah benar sebelum mengirim kotak saran.
            </p>
          </div>
          <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <button
              onClick={onCancel}
              type="button"
              className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              type="button"
              className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
