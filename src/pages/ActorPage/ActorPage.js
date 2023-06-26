import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const ActorPage = () => {
  const { id } = useParams();
  const { data } = useFetch(`/person/${id}`);

  console.log(data);

  return <div>
    <h2>{data.name}</h2>
    <p>{data.biography}</p>
  </div>;
};

export default ActorPage;
