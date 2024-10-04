const apiRespect = async (url, content = null, errMsg = null) => {
  try {
    const response = await fetch(url, content);
    if (!response.ok) throw Error("Faced some Issue");
  } catch (e) {
    errMsg = e.message;
  } finally {
    return errMsg;
  }
};

export default apiRespect;
