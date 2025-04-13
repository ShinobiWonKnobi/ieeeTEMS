import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getImages, 
  getImageById, 
  getTeamMembers, 
  createTeamMember, 
  updateTeamMember, 
  deleteTeamMember,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  submitContactForm
} from '../services/api';

// Image hooks
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

// Team Members hooks
export const useGetTeamMembers = () => {
  return useQuery({
    queryKey: ['teamMembers'],
    queryFn: getTeamMembers,
  });
};

export const useCreateTeamMember = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data) => createTeamMember(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] });
    },
  });
};

export const useUpdateTeamMember = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }) => updateTeamMember(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] });
    },
  });
};

export const useDeleteTeamMember = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id) => deleteTeamMember(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] });
    },
  });
};

// Events hooks
export const useGetEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data) => createEvent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }) => updateEvent(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id) => deleteEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};

// Contact Submission hooks
export const useSubmitContactForm = () => {
  return useMutation({
    mutationFn: (data) => submitContactForm(data),
  });
}; 