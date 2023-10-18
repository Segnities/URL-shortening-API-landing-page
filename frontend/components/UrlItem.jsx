import { useEffect, useState } from 'react';

export default function UrlItem({ url }) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(url.short_url);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 700);
    }
  }, [copied]);

  return (
    <section className="w-10/12 flex justify-between items-center p-5 bg-white rounded-md">
      <h4 className="font-semibold text-base text-gray-800">
        Original url: {url.original_url.length > 32 ? url.original_url.slice(0, 32) : url.original_url}
      </h4>
      <div className="flex items-center gap-5">
        <p className="font-semibold text-base text-blue-400 ml-12">{url.short_url}</p>
        <button
          type="button"
          onClick={copyToClipboard}
          className={`w-36 p-3 text-white rounded-md ${copied ? 'bg-violet-700' : 'bg-cyan-500 hover:bg-cyan-300'}`}
        >
          Cop
          {copied ? 'ied!' : 'y'}
        </button>
      </div>
    </section>
  );
}
