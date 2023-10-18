import {v4 as uuidv4} from "uuid";
import UrlItem from './UrlItem';

export default function UrlList({ urls }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {
        urls.map((url) => (
          <UrlItem key={uuidv4()} url={url} />
        ))
      }
    </div>
  );
}
