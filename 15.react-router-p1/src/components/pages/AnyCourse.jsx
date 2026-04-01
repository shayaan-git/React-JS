import { useParams } from "react-router-dom";

const AnyCourse = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1 className="capitalize whitespace-nowrap text-5xl underline font-bold fixed">
        {params.courseId} Course Page
      </h1>
    </div>
  );
};

export default AnyCourse;
