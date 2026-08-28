(async()=>{
  const img=document.getElementById('rado-photo');
  if(!img)return;
  try{
    const paths=['assets/img/rado2-b64-01.txt?v=2','assets/img/rado2-b64-02.txt?v=2','assets/img/rado2-b64-03.txt?v=2'];
    const parts=await Promise.all(paths.map(async path=>{
      const r=await fetch(path,{cache:'no-store'});
      if(!r.ok)throw new Error(`Cannot load ${path}: ${r.status}`);
      return (await r.text()).trim();
    }));
    img.src='data:image/jpeg;base64,'+parts.join('');
  }catch(err){
    console.error('NU3Gen team portrait:',err);
  }
})();
