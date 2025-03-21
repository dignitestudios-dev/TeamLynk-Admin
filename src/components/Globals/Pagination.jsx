import React from "react";

const Pagination = ({ links, onPageChange }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {links.map((link, index) => {
        // Skip rendering if it's a null URL and not Previous/Next
        if (
          !link.url &&
          !["Previous", "Next"].some((text) => link.label.includes(text))
        ) {
          return null;
        }

        return (
          <button
            key={index}
            onClick={() => {
              if (link.url) {
                // Extract page number from URL
                const url = new URL(link.url);
                const page = url.searchParams.get("page");
                onPageChange(Number(page));
              }
            }}
            disabled={!link.url}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              link.active
                ? "bg-blue-600 text-white"
                : link.url
                ? "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-300"
            }`}
          >
            {/* Clean up the label by removing HTML entities */}
            {link.label.replace(/&laquo;|&raquo;/g, "")}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
