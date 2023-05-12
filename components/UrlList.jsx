import { arrayOf, shape, string } from 'prop-types';

import UrlItem from './UrlItem';

export default function UrlList({ urls }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {
                urls.map((url) => (
                  <UrlItem key={url?.code} url={url} />
                ))
            }
    </div>
  );
}

UrlList.propTypes = {
  urls: arrayOf(shape({
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
  })).isRequired,
};
