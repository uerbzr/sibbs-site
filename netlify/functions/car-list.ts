import { Handler } from '@netlify/functions';

type Car = {
  id: number;
  make: string;
  model: string;
};

const handler: Handler = async (event, context) => {
  const cars: Car[] = [
    { id: 1, make: 'Mini', model: 'Clubman' },
    { id: 2, make: 'Tesla', model: 'CyberTruck' },
    { id: 3, make: 'Tesla', model: 'Model 3' },
    { id: 4, make: 'Ford', model: 'Mustang' },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(cars),
  };
};

export { handler };
