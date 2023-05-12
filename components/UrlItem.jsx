import { shape, string } from 'prop-types';
import { useState, useEffect } from 'react';

export default function UrlItem({ url }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e) => {
    setCopied(true);
    navigator.clipboard.writeText(url?.short_link);
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
        {url?.original_link}
      </h4>
      <div className="flex items-center gap-5">
        <p className="font-semibold text-base text-blue-400 ml-12">{url?.short_link}</p>
        <button
          type="button"
          onClick={copyToClipboard}
          className={`w-36 p-3 text-white rounded-md ${copied ? 'bg-violet-700 animate__animated animate__bounce animate__delay-2s' : 'bg-cyan-500 hover:bg-cyan-300'}`}
        >
          Cop
          {copied ? 'ied!' : 'y'}
        </button>
      </div>
    </section>
  );
}

UrlItem.propTypes = {
  url: shape({
    code: string.isRequired,
    short_link: string.isRequired,
    full_short_link: string.isRequired,
    short_link2: string.isRequired,
    full_short_link2: string.isRequired,
    short_link3: string.isRequired,
    full_short_link3: string.isRequired,
    share_link: string.isRequired,
    full_share_link: string.isRequired,
    original_link: string.isRequired,
  }).isRequired,
};
