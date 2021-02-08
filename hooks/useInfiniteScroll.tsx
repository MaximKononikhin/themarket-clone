import React, { useEffect, useState } from 'react'
import { IItem } from '../types';
import { endPoint } from '../utils/constants';

const useInfiniteScroll = (url: string) => {
  const [skip, setSkip] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState<IItem[]>([])

  const infiniteScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setLoading(true);
      const res =  await fetch(`${endPoint}/items?${url}&skip=${skip + 18}`);
      const result = await res.json();
      setItems([...items, ...result]);
      setSkip(prevSkip => prevSkip + 18);
      setLoading(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [skip])

  useEffect(() => {
    setItems([]);
    setSkip(0);
  }, [url])

  return {items, isLoading};
}

export default useInfiniteScroll
