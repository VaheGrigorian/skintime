export async function submitForm(url, values, handleSuccess, handleFailure) {
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    let body = await res.json();

    if (res.status === 201) {
      handleSuccess({ ...values, id: body.id });
    } else {
      let resBody = await res.json();
      handleFailure(resBody);
    }
  } catch (e) {
    handleFailure(e);
  }
}
