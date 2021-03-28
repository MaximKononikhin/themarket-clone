import React, { useEffect, useState } from 'react'
import { IItem } from '../types';
import { makeApiCall } from '../services/api';

const useInfiniteScroll = (url: string) => {
  const [skip, setSkip] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    const infiniteScroll = async () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !isLoading) {
        setLoading(true);
        const result = await makeApiCall<IItem[]>(`items?${url}&skip=${skip + 18}`, {method: 'GET'});
        setItems((prev) => [...prev, ...result]);
        setSkip(prevSkip => prevSkip + 18);
        setLoading(false);
      }
    }

    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [skip, items, isLoading])

  useEffect(() => {
    setItems([]);
    setSkip(0);
  }, [url])

  return {items, isLoading};
}

export default useInfiniteScroll
