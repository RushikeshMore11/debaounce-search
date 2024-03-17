const fetchData = async (url: string) => {
  try {
    const data = await fetch(url);
    const list = await data.json();
    return list;
  } catch (error) {
    console.log(error);
  }
};

const debounce = (func: any, delay: number) => {
  let timer: number | NodeJS.Timeout | undefined;
  return (...args: any) => {
    return new Promise((resolve) => {
      window.clearTimeout(timer);
      timer = setTimeout(async () => {
        const data = await func(...args);
        resolve(data);
      }, delay);
    });
  };
};


const debounceQuery = debounce(fetchData, 500);
export default debounceQuery
