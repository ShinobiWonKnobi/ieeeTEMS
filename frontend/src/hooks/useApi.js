import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getImages, getImageById } from '../services/api';

export const useGetImages = (name) => {
  return useQuery({
    queryKey: ['images', name],
    queryFn: () => getImages(name),
    enabled: !!name, // Only run the query if name is provided
  });
};

export const useGetImageById = (id) => {
  return useQuery({
    queryKey: ['image', id],
    queryFn: () => getImageById(id),
    enabled: !!id, // Only run the query if id is provided
  });
};

// Hook below this line to be removed
/*
export const useUploadImage = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ name, imagePath }) => uploadImage(name, imagePath),
    onSuccess: (data, variables) => {
      // Invalidate and refetch images for the uploaded name
      queryClient.invalidateQueries({ queryKey: ['images', variables.name] });
      return data;
    },
  });
};
*/
// Hook above this line to be removed 