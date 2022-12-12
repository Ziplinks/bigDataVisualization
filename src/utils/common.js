 function chartSize (res) {
    const clientWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (!clientWidth) return;
    // let fz = clientWidth / 1920;
    let fz = 1;
    return res * fz;
  }
  export {
    chartSize
  }