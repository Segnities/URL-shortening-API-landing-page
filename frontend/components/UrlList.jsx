import {v4 as uuidv4} from "uuid";
import UrlItem from './UrlItem';
import { useSelector } from 'react-redux';

export default function UrlList() {
  const {urls} = useSelector(state => state.urls);
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
