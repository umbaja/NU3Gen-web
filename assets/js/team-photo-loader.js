(()=>{
  const portraits = [
    { id: 'kasarda-photo', path: 'assets/img/kasarda-b64.txt?v=1' },
    { id: 'vietoris-photo', path: 'assets/img/vietoris-b64.txt?v=1' }
  ];

  portraits.forEach(async ({ id, path }) => {
    const img = document.getElementById(id);
    if (!img) return;
    try {
      const response = await fetch(path, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Cannot load ${path}: ${response.status}`);
      const data = (await response.text()).trim();
      img.src = 'data:image/jpeg;base64,' + data;
    } catch (error) {
      console.error(`NU3Gen team portrait ${id}:`, error);
    }
  });
})();
