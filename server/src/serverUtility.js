export const findOne = (data, _id) => {
  if (!data || !Array.isArray(data)) {
    return;
  }
  return data.find(data => data._id == _id);
};
