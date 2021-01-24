import { useEffect, useState } from 'react';

import { getLocalItem } from '@/helpers/index';

const useGetTrainerData = (dependecy) => {
  const [trainer, setTrainer] = useState(undefined);
  useEffect(() => {
    setTrainer(getLocalItem('trainer'));

    window.addEventListener(
      'storage',
      (e) => e.key === 'trainer' && setTrainer(JSON.parse(e.newValue))
    );
  }, dependecy || []);

  return trainer;
};

export default useGetTrainerData;
