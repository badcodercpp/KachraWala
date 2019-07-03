 export const fetchStatusHandler = (response) => {
    if (response.status === 200 || response.status === 201) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  }