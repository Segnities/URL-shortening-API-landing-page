import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from "axios";

import { setUrls } from '../store/reducer/urls';
export default function UrlsLayout({ children }) {
  const {user} = useSelector(state => state.userProvider);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        console.log(user.id);
        const response = await axios.post("http://localhost:7886/api/links", {
          userId: user.id
        });
        const data = response.data;
        dispatch(setUrls({listId: data.listId, urls: data.urls}));
        console.log(response.data);
      }
    }
    fetchData();

  }, [user]);
  return (
    <>
      {children}
    </>
  );
}