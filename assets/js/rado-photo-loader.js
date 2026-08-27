(async()=>{
  const img=document.getElementById('rado-photo');
  if(!img)return;
  try{
    const paths=Array.from({length:7},(_,i)=>`assets/img/rado-b64-${String(i+1).padStart(2,'0')}.txt`);
    const parts=await Promise.all(paths.map(async path=>{
      const r=await fetch(path,{cache:'force-cache'});
      if(!r.ok)throw new Error(`Cannot load ${path}: ${r.status}`);
      return (await r.text()).trim();
    }));
    img.src='data:image/jpeg;base64,'+parts.join('');
  }catch(err){
    console.error('NU3Gen team portrait:',err);
  }
})();
