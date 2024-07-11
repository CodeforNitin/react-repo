import { useEffect } from "react";

export default function Post({ data, setPageNo }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(lastImag);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 1 }
    );

    const lastImag = document.querySelector(".image-post:last-child");

    if (!lastImag) return;
    observer.observe(lastImag);

    return () => {
      if (lastImag) observer.unobserve(lastImag);
      observer.disconnect();
    };
  }, [data]);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <img className="image-post" key={item.id} src={item.download_url} />
        );
      })}
    </div>
  );
}
