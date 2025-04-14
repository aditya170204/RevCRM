import axiosInstance from './AxiosInstance';

export const getLeadList = async () => {
  const response = await axiosInstance.get(`leads`);
  return response.data;
};
