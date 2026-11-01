(function(){
  'use strict';

  // ---------- text in both languages ----------
  const I18N = {
    en: {
      loading:'Loading…', brand:'Car costs', signinTitle:'Car repair costs', signinText:'For family and friends tracking cars bought in the US. Sign in to see everyone’s cars and keep track of your own.',
      signinGoogle:'Sign in with Google', deniedTitle:'You’re not on the list yet', deniedText:'{email} isn’t on the invite list. Ask {admin} to add this email, then sign in again.', signOut:'Sign out',
      showIn:'Show totals in', rateAria:'GEL per 1 USD', checkKursi:'kursi.ge ↗', rateUpdated:'Updated {d}', rateBy:'Updated {d} by {name}',
      members:'Members', membersHint:'People on this list can sign in with Google using exactly this email.', addMember:'Add', emailAria:'Email to invite', remove:'Remove', confirmRemove:'Confirm', admin:'Admin', you:'you',
      errEmail:'Enter a valid email.', errExists:'That email is already on the list.',
      garage:'Garage', allCars:'All cars', myCars:'My cars', addCar:'Add car', yours:'Yours', ownerBy:'{name}’s car', ownerYou:'Your car',
      noCars:'No cars yet. Add the first one to start tracking costs.', noMyCars:'You haven’t added a car yet.',
      cardRepair:'{v} projected repair', cardAllIn:'{v} all-in with purchase', cardItems1:'{n} cost', cardItemsN:'{n} costs',
      back:'Back to garage', editCar:'Edit car', newCar:'Add car', saveCar:'Save car', carNameLabel:'Car', carNamePh:'BMW F44, Jeep Wrangler…',
      carHint:'Prices are optional. Add them to see the all-in cost and expected profit.', deleteCar:'Delete car', confirmDeleteCar:'Delete car and all its costs',
      errCarName:'Give the car a name.',
      heroLabel:'Projected repair cost', addCost:'Add cost', editCost:'Edit cost', saveChanges:'Save changes',
      searchPh:'Search items or notes', search:'Search', filterAria:'Filter by status', sortAria:'Sort',
      allStatuses:'All statuses', st_estimate:'Estimate', st_ordered:'Ordered', st_paid:'Paid',
      sortAdded:'Order added', sortCost:'Highest cost', sortCat:'Category', sortStatus:'Status', exportCsv:'Export CSV',
      cat_auction:'Auction price', cat_fees:'Auction fees', cat_inland:'US transport', cat_body:'Body & panels', cat_parts:'Parts', cat_paint:'Paint', cat_labor:'Labor', cat_mech:'Mechanical', cat_elec:'Electrical', cat_ship:'Shipping & customs', cat_other:'Other',
      paidSoFar:'Paid so far', stillToPay:'Still to pay', overEst:'Over estimate', underEst:'Under estimate', onEst:'Against estimate',
      stillEst:'Items still estimated', ofN:'{a} of {b}', allIn:'All-in with purchase', profit:'Expected profit', loss:'Expected loss',
      hItem:'Item', hCat:'Category', hStatus:'Status', hEst:'Estimate', hAct:'Actual', notYet:'Not yet',
      emptyItems:'No costs yet.', emptyItemsOwn:'No costs yet. Add your first item to start the tally.', emptyMatch:'Nothing matches this search or filter.', clearFilters:'Clear filters',
      count1:'{n} item', countN:'{n} items', countShown:'{n} shown', total:'Total {v}', shownTotal:'Shown total {v}', untitled:'Untitled',
      photos:'Photos', addPhotos:'Add photos', photosEmptyCan:'Add photos of the damage, parts and progress to keep them next to the costs.', photosEmpty:'No photos yet.',
      cover:'Cover', openPhoto:'Open photo', carPhotoAlt:'Photo of {car}', carIll:'Illustration of a black four-door coupe',
      uploading:'Uploading photo {i} of {n}…', someFailed:'{d} added. {f} couldn’t be uploaded. Try JPG or PNG.',
      deletePhoto:'Delete photo', confirmDelete:'Confirm delete', useCover:'Use as cover', close:'Close',
      purchasePrice:'Purchase price', salePrice:'Expected sale price',
      nameEn:'Name in English', nameKa:'Name in Georgian', namePhEn:'Front bumper, headlight, labor…', namePhKa:'ბამპერი, ფარი, ხელობა…',
      category:'Category', status:'Status', estCost:'Estimated cost', actCost:'Actual cost (when known)', actPh:'Leave blank if unknown',
      currency:'Currency', quantity:'Quantity', note:'Note', notePh:'Supplier, part number, who’s doing the work…', del:'Delete', cancel:'Cancel',
      errName:'Give the item a name in at least one language.', errCost:'Enter an estimated or actual cost.', errNeg:'Costs can’t be negative.',
      errSave:'Couldn’t save. Check your connection and try again.', errLoad:'Couldn’t load the data. Refresh the page to try again.', errSignin:'Couldn’t start Google sign-in. Try again.',
      rateSaved:'Rate updated for everyone', titleSuffix:'Car costs',
      signinShort:'Member sign in', lpH1:'Every car’s costs <em>in one place</em>',
      lpLead:'A shared tracker for family and friends who fix up cars from the US: costs, progress and before and after photos.',
      lpHint:'Family or friend? Sign in to see the costs.', lpChip:'Real cars, real progress',
      p1t:'All costs together', p1d:'Parts, labor, shipping, paint. Costs are visible to members only.',
      p2t:'Live progress', p2d:'Each car moves through clear stages. See what is happening now and about how many days are left.',
      p3t:'Before and after', p3d:'Real photos from before any work starts, and again when it is done.',
      lpGarage:'The garage', lpLocked:'Costs are visible to members only', membersOnly:'Members only',
      bandT:'Part of the family or friends?', bandD:'Ask {admin} to add your email, then sign in with Google.',
      now:'Now:', daysLeft:'about {n} days left', dayLeft:'about 1 day left', daysShort:'{n} days left', dayShort:'1 day left', finished:'Finished and ready',
      noBefore:'No photo yet', noAfter:'No photo yet', afterWait:'Added when done', repairCost:'Repair cost', sumCars:'Cars', sumRepair:'Repair costs, total', sumPaid:'Paid so far', sumActive:'In progress', sumNext:'Done first',
      stg_bought:'Bought', stg_shipping:'Shipping', stg_repair:'Repair', stg_paint:'Paint', stg_ready:'Ready',
      stageLabel:'Current stage', stageLeft:'Days left in this stage', planTitle:'Planned days per stage', planHint:'Visitors see the stage and the total days left, never the costs.',
      photoType:'Photo type', tag_before:'Before', tag_progress:'In progress', tag_after:'After',
      csv:['Item (English)','Item (Georgian)','Category','Status','Quantity','Unit estimate','Unit actual','Currency','Line total ({c})','Note']
    },
    ka: {
      loading:'იტვირთება…', brand:'მანქანების ხარჯები', signinTitle:'მანქანის რემონტის ხარჯები', signinText:'ოჯახისა და მეგობრებისთვის, ვინც ამერიკიდან ჩამოიყვანა მანქანა. შედი, რომ ნახო ყველას მანქანები და აღრიცხო შენი ხარჯები.',
      signinGoogle:'შესვლა Google-ით', deniedTitle:'ჯერ სიაში არ ხარ', deniedText:'{email} მოწვეულთა სიაში არ არის. სთხოვე {admin}-ს დაამატოს ეს ელფოსტა და შემდეგ თავიდან შედი.', signOut:'გასვლა',
      showIn:'ჯამების ვალუტა', rateAria:'ლარი 1 დოლარზე', checkKursi:'kursi.ge ↗', rateUpdated:'განახლდა {d}', rateBy:'განახლდა {d}, {name}',
      members:'წევრები', membersHint:'ამ სიაში მყოფ ადამიანებს შეუძლიათ შესვლა Google-ით, ზუსტად ამ ელფოსტით.', addMember:'დამატება', emailAria:'მოსაწვევი ელფოსტა', remove:'წაშლა', confirmRemove:'დადასტურება', admin:'ადმინი', you:'შენ',
      errEmail:'მიუთითე სწორი ელფოსტა.', errExists:'ეს ელფოსტა უკვე სიაშია.',
      garage:'ავტოფარეხი', allCars:'ყველა მანქანა', myCars:'ჩემი მანქანები', addCar:'მანქანის დამატება', yours:'შენი', ownerBy:'მფლობელი: {name}', ownerYou:'შენი მანქანა',
      noCars:'მანქანები ჯერ არ არის. დაამატე პირველი და დაიწყე ხარჯების აღრიცხვა.', noMyCars:'შენ ჯერ მანქანა არ დაგიმატებია.',
      cardRepair:'{v} რემონტის სავარაუდო ხარჯი', cardAllIn:'{v} სულ, მანქანის ფასით', cardItems1:'{n} ხარჯი', cardItemsN:'{n} ხარჯი',
      back:'ავტოფარეხში დაბრუნება', editCar:'მანქანის რედაქტირება', newCar:'მანქანის დამატება', saveCar:'შენახვა', carNameLabel:'მანქანა', carNamePh:'BMW F44, Jeep Wrangler…',
      carHint:'ფასები არასავალდებულოა. დაამატე, რომ ნახო სრული ხარჯი და მოსალოდნელი მოგება.', deleteCar:'მანქანის წაშლა', confirmDeleteCar:'წაშალე მანქანა და მისი ხარჯები',
      errCarName:'მიუთითე მანქანის სახელი.',
      heroLabel:'რემონტის სავარაუდო ხარჯი', addCost:'ხარჯის დამატება', editCost:'ხარჯის რედაქტირება', saveChanges:'ცვლილებების შენახვა',
      searchPh:'ძებნა დასახელებით ან შენიშვნით', search:'ძებნა', filterAria:'სტატუსით გაფილტვრა', sortAria:'დალაგება',
      allStatuses:'ყველა სტატუსი', st_estimate:'სავარაუდო', st_ordered:'შეკვეთილი', st_paid:'გადახდილი',
      sortAdded:'დამატების რიგით', sortCost:'ყველაზე ძვირი', sortCat:'კატეგორიით', sortStatus:'სტატუსით', exportCsv:'CSV-ად გადმოწერა',
      cat_auction:'აუქციონის ფასი', cat_fees:'აუქციონის საკომისიო', cat_inland:'ტრანსპორტი აშშ-ში', cat_body:'ძარა და დეტალები', cat_parts:'ნაწილები', cat_paint:'შეღებვა', cat_labor:'ხელობა', cat_mech:'მექანიკა', cat_elec:'ელექტროობა', cat_ship:'ტრანსპორტი და განბაჟება', cat_other:'სხვა',
      paidSoFar:'უკვე გადახდილი', stillToPay:'დარჩენილი გადასახდელი', overEst:'შეფასებაზე მეტი', underEst:'შეფასებაზე ნაკლები', onEst:'სხვაობა შეფასებასთან',
      stillEst:'ჯერ სავარაუდო პოზიციები', ofN:'{a} / {b}', allIn:'სრული ხარჯი მანქანის ფასით', profit:'მოსალოდნელი მოგება', loss:'მოსალოდნელი ზარალი',
      hItem:'დასახელება', hCat:'კატეგორია', hStatus:'სტატუსი', hEst:'შეფასება', hAct:'ფაქტიური', notYet:'ჯერ არა',
      emptyItems:'ხარჯები ჯერ არ არის.', emptyItemsOwn:'ხარჯები ჯერ არ არის. დაამატე პირველი პოზიცია.', emptyMatch:'ამ ძებნით ან ფილტრით ვერაფერი მოიძებნა.', clearFilters:'ფილტრების გასუფთავება',
      count1:'{n} პოზიცია', countN:'{n} პოზიცია', countShown:'ნაჩვენებია {n}', total:'ჯამი {v}', shownTotal:'ნაჩვენების ჯამი {v}', untitled:'უსახელო',
      photos:'ფოტოები', addPhotos:'ფოტოების დამატება', photosEmptyCan:'დაამატე დაზიანების, ნაწილების და რემონტის ფოტოები, რომ ხარჯებთან ერთად გქონდეს.', photosEmpty:'ფოტოები ჯერ არ არის.',
      cover:'მთავარი', openPhoto:'ფოტოს გახსნა', carPhotoAlt:'{car} — ფოტო', carIll:'შავი ოთხკარიანი კუპეს ილუსტრაცია',
      uploading:'იტვირთება ფოტო {i} / {n}…', someFailed:'დაემატა {d}. {f} ვერ აიტვირთა. სცადე JPG ან PNG.',
      deletePhoto:'ფოტოს წაშლა', confirmDelete:'წაშლის დადასტურება', useCover:'მთავარ ფოტოდ დაყენება', close:'დახურვა',
      purchasePrice:'ყიდვის ფასი', salePrice:'სავარაუდო გაყიდვის ფასი',
      nameEn:'დასახელება ინგლისურად', nameKa:'დასახელება ქართულად', namePhEn:'Front bumper, headlight, labor…', namePhKa:'ბამპერი, ფარი, ხელობა…',
      category:'კატეგორია', status:'სტატუსი', estCost:'სავარაუდო ფასი', actCost:'ფაქტიური ფასი (როცა ცნობილია)', actPh:'დატოვე ცარიელი, თუ ჯერ არ იცი',
      currency:'ვალუტა', quantity:'რაოდენობა', note:'შენიშვნა', notePh:'მომწოდებელი, ნაწილის ნომერი, ვინ აკეთებს…', del:'წაშლა', cancel:'გაუქმება',
      errName:'მიუთითე დასახელება მინიმუმ ერთ ენაზე.', errCost:'მიუთითე სავარაუდო ან ფაქტიური ფასი.', errNeg:'ფასი უარყოფითი ვერ იქნება.',
      errSave:'ვერ შეინახა. შეამოწმე ინტერნეტი და სცადე თავიდან.', errLoad:'მონაცემები ვერ ჩაიტვირთა. განაახლე გვერდი.', errSignin:'Google-ით შესვლა ვერ დაიწყო. სცადე თავიდან.',
      rateSaved:'კურსი ყველასთვის განახლდა', titleSuffix:'მანქანების ხარჯები',
      signinShort:'ავტორიზაცია', lpH1:'ყველა მანქანის ხარჯი <em>ერთ ადგილას</em>',
      lpLead:'საერთო სივრცე ოჯახისა და მეგობრებისთვის, ვინც აშშ-დან მანქანებს აკეთებს: ხარჯები, პროგრესი და ფოტოები ადრე და მერე.',
      lpHint:'ოჯახიდან ან მეგობრებიდან ხარ? შედი და ნახე ხარჯები.', lpChip:'რეალური მანქანები, რეალური პროგრესი',
      p1t:'ყველა ხარჯი ერთად', p1d:'ნაწილები, ხელობა, ტრანსპორტი, შეღებვა. ხარჯებს მხოლოდ წევრები ხედავენ.',
      p2t:'რეალური პროგრესი', p2d:'მანქანა გადის გასაგებ ეტაპებს. ჩანს, რა ხდება ახლა და დაახლოებით რამდენი დღე დარჩა.',
      p3t:'ადრე და მერე', p3d:'რეალური ფოტოები სამუშაოს დაწყებამდე და დასრულების შემდეგ.',
      lpGarage:'ავტოფარეხი', lpLocked:'ხარჯებს მხოლოდ წევრები ხედავენ', membersOnly:'წევრებისთვის',
      bandT:'ოჯახის ან მეგობრების წრიდან ხარ?', bandD:'სთხოვე {admin}-ს ელფოსტის დამატება და შედი Google-ით.',
      now:'ახლა:', daysLeft:'დაახლოებით {n} დღე დარჩა', dayLeft:'დაახლოებით 1 დღე დარჩა', daysShort:'{n} დღე დარჩა', dayShort:'1 დღე დარჩა', finished:'დასრულებულია, მზადაა',
      noBefore:'ფოტო ჯერ არ არის', noAfter:'ფოტო ჯერ არ არის', afterWait:'დაემატება დასრულებისას', repairCost:'რემონტის ხარჯი', sumCars:'მანქანები', sumRepair:'რემონტის ჯამი', sumPaid:'უკვე გადახდილი', sumActive:'მიმდინარეობს', sumNext:'პირველი დასრულდება',
      stg_bought:'ნაყიდია', stg_shipping:'ტრანსპორტირება', stg_repair:'შეკეთება', stg_paint:'შეღებვა', stg_ready:'მზადაა',
      stageLabel:'მიმდინარე ეტაპი', stageLeft:'დარჩენილი დღეები ამ ეტაპზე', planTitle:'დაგეგმილი დღეები ეტაპების მიხედვით', planHint:'სტუმრები ხედავენ ეტაპს და დარჩენილ დღეებს, ხარჯებს — არა.',
      photoType:'ფოტოს ტიპი', tag_before:'ადრე', tag_progress:'მიმდინარეობს', tag_after:'მერე',
      csv:['დასახელება (ინგლისურად)','დასახელება (ქართულად)','კატეგორია','სტატუსი','რაოდენობა','ერთეულის შეფასება','ერთეულის ფაქტიური ფასი','ვალუტა','ჯამი ({c})','შენიშვნა']
    }
  };

  const store = {
    get(k){ try { return localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v){ try { localStorage.setItem(k, v); } catch (_) {} }
  };
  let lang = store.get('cc-lang') || ((navigator.language || '').toLowerCase().startsWith('ka') ? 'ka' : 'en');
  if (lang !== 'en' && lang !== 'ka') lang = 'en';
  let display = store.get('cc-display') === 'USD' ? 'USD' : 'GEL';

  function t(key, vars){
    let s = (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
    if (vars && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
    return s;
  }

  const CATS = ['auction','fees','inland','ship','body','parts','paint','labor','mech','elec','other'];
  const STAT_ORDER = {estimate:0, ordered:1, paid:2};
  const SYM = {GEL:'₾', USD:'$'};
  const STAGES = ['bought','shipping','repair','paint','ready'];
  const TAGS = ['before','progress','after'];
  const DEFAULT_PLAN = {shipping:14, repair:10, paint:5}; // planned days, used until the owner sets their own
  const CAR_SVG = `<svg viewBox="0 0 640 360" role="img" aria-label="__CARLABEL__" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b424b"/><stop offset=".38" stop-color="#16191d"/><stop offset="1" stop-color="#060709"/></linearGradient>
    <linearGradient id="glassG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5a6571"/><stop offset=".55" stop-color="#1c2228"/><stop offset="1" stop-color="#303841"/></linearGradient>
    <radialGradient id="rimG" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#6b747e"/><stop offset="1" stop-color="#22272d"/></radialGradient>
    <radialGradient id="shadowG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="320" cy="286" rx="300" ry="16" fill="url(#shadowG)"/><ellipse cx="170" cy="286" rx="44" ry="5" fill="#000" opacity=".45"/><ellipse cx="488" cy="286" rx="44" ry="5" fill="#000" opacity=".45"/>
  <g transform="translate(20,80)">
    <path d="M46 180 L40 156 Q37 126 58 117 L122 107 C164 99 204 66 262 60 L328 58 C362 60 392 80 414 96 L498 107 Q548 113 561 128 L566 160 Q566 178 548 180 Z" fill="url(#bodyG)"/>
    <path d="M146 104 C186 96 220 74 264 68 L324 66 C350 68 374 82 392 96 Q380 100 360 101 L150 106 Z" fill="url(#glassG)" stroke="#48515b" stroke-width="1.2"/>
    <path d="M300 66 L300 103" stroke="#08090b" stroke-width="7"/>
    <path d="M216 80 L208 105" stroke="#08090b" stroke-width="5"/>
    <path d="M62 124 C200 116 400 114 552 122" fill="none" stroke="#66707b" stroke-width="1.4" opacity=".7"/>
    <path d="M120 140 C260 131 420 129 540 136" fill="none" stroke="#ffffff" stroke-width="9" opacity=".05"/>
    <path d="M200 160 L420 160" stroke="#262a30" stroke-width="1"/>
    <path d="M244 108 L238 176 M364 104 L370 176" stroke="#040506" stroke-width="1.6"/>
    <rect x="272" y="117" width="22" height="4" rx="2" fill="#3c444d"/>
    <rect x="390" y="115" width="20" height="4" rx="2" fill="#3c444d"/>
    <path d="M384 97 Q398 88 411 94 L404 103 Z" fill="#101215"/>
    <path d="M526 115 Q551 118 560 128 L534 126 Z" fill="#dbe3eb" opacity=".88"/>
    <path d="M42 124 L78 116 L76 122 L41 130 Z" fill="#9b2020"/>
    <path d="M104 181 L104 170 A46 46 0 0 1 196 170 L196 181 Z M422 181 L422 170 A46 46 0 0 1 514 170 L514 181 Z" fill="#040506"/>
    <g id="wheel">
      <circle cx="150" cy="170" r="36" fill="#0b0c0e" stroke="#1c1f23" stroke-width="2"/>
      <circle cx="150" cy="170" r="25" fill="url(#rimG)"/>
      <g stroke="#14171b" stroke-width="5" stroke-linecap="round">
        <path d="M150 170 L150 147"/><path d="M150 170 L171.9 162.9"/><path d="M150 170 L163.5 188.6"/><path d="M150 170 L136.5 188.6"/><path d="M150 170 L128.1 162.9"/>
      </g>
      <circle cx="150" cy="170" r="6" fill="#30363d"/>
    </g>
    <use href="#wheel" transform="translate(318,0)"/>
  </g>
</svg>`;
  const carArt = () => CAR_SVG.replace('__CARLABEL__', esc(t('carIll')));

  // ---------- setup ----------
  const cfg = window.CAR_COSTS_CONFIG || {};
  const $ = id => document.getElementById(id);
  const views = ['vLoading','vSetup','vSignin','vDenied','vApp'];
  function show(id){ views.forEach(v => $(v).hidden = v !== id); }

  if (!cfg.supabaseUrl || /YOUR-/.test(cfg.supabaseUrl + cfg.supabaseAnonKey) || !window.supabase){
    show('vSetup');
    return;
  }
  const sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
  const BUCKET = 'car-photos';

  // ---------- state ----------
  const S = {me:null, isAdmin:false, cars:[], items:[], photos:[], rate:{usd_gel:2.601, updated_at:null, updated_by:''},
    scope: store.get('cc-scope') === 'mine' ? 'mine' : 'all', carId:null, q:'', status:'all', sort:'added'};
  const urlCache = new Map(); // storage path -> signed url

  // ---------- helpers ----------
  function esc(s){ return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function num(v){ const n = typeof v === 'number' ? v : parseFloat(v); return Number.isFinite(n) ? n : null; }
  function rate(){ return num(S.rate.usd_gel) || 2.601; }
  function conv(amt, from){ if (amt == null) return 0; if (from === display) return amt; return from === 'USD' ? amt * rate() : amt / rate(); }
  function fmt(n, cur){
    cur = cur || display;
    const abs = Math.abs(n);
    const digits = abs >= 1000 || Number.isInteger(Math.round(abs*100)/100) ? 0 : 2;
    return (n < 0 ? '−' : '') + SYM[cur] + abs.toLocaleString('en-US', {minimumFractionDigits:digits, maximumFractionDigits:digits});
  }
  const lineEst = it => num(it.est) == null ? null : num(it.est) * it.qty;
  const lineAct = it => num(it.act) == null ? null : num(it.act) * it.qty;
  const lineEff = it => { const a = lineAct(it); return a != null ? a : (lineEst(it) || 0); };
  const itemName = it => (lang === 'ka' ? (it.name_ka || it.name) : (it.name || it.name_ka)) || t('untitled');
  const catLabel = c => t('cat_' + c);
  const statLabel = s => t('st_' + s);
  const isMine = car => car && S.me && car.owner_id === S.me.id;
  const carItems = id => S.items.filter(i => i.car_id === id);
  const carPhotos = id => S.photos.filter(p => p.car_id === id).sort((a,b) => a.created_at < b.created_at ? -1 : 1);
  function fmtDate(iso){ return new Date(iso).toLocaleDateString(lang === 'ka' ? 'ka-GE' : 'en-GB', {day:'numeric', month:'short'}); }

  // stages and days left: the days left in the current stage plus the planned days of every later stage
  const stageOf = c => STAGES.includes(c.stage) ? c.stage : 'bought';
  const planOf = c => Object.assign({}, DEFAULT_PLAN, c.plan || {});
  const wholeDays = v => Math.max(0, Math.round(num(v) || 0));
  function daysLeft(c){
    const i = STAGES.indexOf(stageOf(c)); if (i === STAGES.length - 1) return 0;
    const plan = planOf(c);
    let d = wholeDays(c.stage_left);
    for (let k = i + 1; k < STAGES.length; k++) d += wholeDays(plan[STAGES[k]]);
    return d;
  }
  function statusLine(c){
    const st = stageOf(c);
    if (st === 'ready') return `<b>${esc(t('finished'))}</b>`;
    const d = daysLeft(c);
    return `${esc(t('now'))} <b>${esc(t('stg_' + st))}</b> · <span class="days num">${esc(d === 1 ? t('dayLeft') : t('daysLeft', {n:d}))}</span>`;
  }
  function stepsHtml(c){
    const cur = STAGES.indexOf(stageOf(c)), ready = cur === STAGES.length - 1;
    return '<div class="steps">' + STAGES.map((s, i) => `<span class="s${i < cur || ready ? ' done' : i === cur ? ' now' : ''}"><span>${esc(t('stg_' + s))}</span></span>`).join('') + '</div>';
  }
  const CLOCK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  function chipsHtml(c){ // stage and days left, shown on the car photo
    const st = stageOf(c), d = daysLeft(c);
    return `<div class="chips"><span class="chip"><i></i>${esc(t('stg_' + st))}</span>${st === 'ready' ? '' : `<span class="chip num">${CLOCK_SVG}${esc(d === 1 ? t('dayShort') : t('daysShort', {n:d}))}</span>`}</div>`;
  }
  const tagOf = p => TAGS.includes(p.tag) ? p.tag : 'progress';

  function totals(items){
    let projected = 0, paid = 0, estOnly = 0, variance = 0, varianceCount = 0;
    const byCat = {};
    for (const it of items){
      const eff = conv(lineEff(it), it.cur);
      projected += eff;
      if (it.status === 'paid') paid += eff;
      byCat[it.cat] = (byCat[it.cat] || 0) + eff;
      const a = lineAct(it), e = lineEst(it);
      if (a != null && e != null){ variance += conv(a - e, it.cur); varianceCount++; }
      if (a == null) estOnly++;
    }
    return {projected, paid, remaining: projected - paid, byCat, variance, varianceCount, estOnly};
  }

  let toastTimer = null;
  function toast(msg){ const el = $('toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => el.hidden = true, 4000); }
  function fail(error, key){ console.error(error); toast(t(key || 'errSave')); }

  async function signedUrls(paths){
    const missing = paths.filter(p => p && !isSitePhoto(p) && !urlCache.has(p));
    if (missing.length){
      const {data, error} = await sb.storage.from(BUCKET).createSignedUrls(missing, 60 * 60 * 6);
      if (!error && data) data.forEach(d => { if (d.signedUrl) urlCache.set(d.path, d.signedUrl); });
    }
  }
  // a cover can also be a file that ships with the site (images/...), e.g. a placeholder until real photos exist
  const isSitePhoto = p => /^images\/[\w.-]+$/.test(p || '');
  const urlFor = p => isSitePhoto(p) ? p : (urlCache.get(p) || '');

  // two-step delete buttons
  function armable(btn, labelKey, confirmKey, onConfirm){
    let armed = false, timer = null;
    const reset = () => { armed = false; clearTimeout(timer); btn.textContent = t(labelKey); btn.classList.remove('armed'); };
    btn.addEventListener('click', () => {
      if (!armed){ armed = true; btn.textContent = t(confirmKey); btn.classList.add('armed'); timer = setTimeout(reset, 4000); return; }
      reset(); onConfirm();
    });
    return reset;
  }
  function openDlg(d){ if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', ''); }
  document.querySelectorAll('dialog [data-close]').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));

  // ---------- language & currency ----------
  function applyLang(){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); }); // our own trusted strings only
    $('bandD').textContent = t('bandD', {admin:cfg.adminName || 'the admin'});
    const curStage = $('cStage').value;
    $('cStage').innerHTML = STAGES.map(s => `<option value="${s}">${esc(t('stg_' + s))}</option>`).join('');
    if (curStage) $('cStage').value = curStage;
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    document.querySelectorAll('[data-i18n-ph]').forEach(el => el.setAttribute('placeholder', t(el.dataset.i18nPh)));
    document.querySelectorAll('.langSeg button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const cur = $('fCat').value;
    $('fCat').innerHTML = CATS.map(c => `<option value="${c}">${esc(catLabel(c))}</option>`).join('');
    if (cur) $('fCat').value = cur;
    resetItemDel(); resetCarDel(); resetPhotoDel();
    render();
    if (!$('vSignin').hidden) renderLanding();
  }
  document.querySelectorAll('.langSeg button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; store.set('cc-lang', lang); applyLang(); }));
  document.querySelectorAll('#curSeg button').forEach(b => b.addEventListener('click', () => { display = b.dataset.cur; store.set('cc-display', display); render(); }));

  // ---------- rendering ----------
  function render(){
    if ($('vApp').hidden) return;
    document.querySelectorAll('#curSeg button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cur === display)));
    document.querySelectorAll('#scopeSeg button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.scope === S.scope)));
    if (document.activeElement !== $('rate')) $('rate').value = rate();
    $('rateDate').textContent = S.rate.updated_at ? (S.rate.updated_by ? t('rateBy', {d:fmtDate(S.rate.updated_at), name:S.rate.updated_by}) : t('rateUpdated', {d:fmtDate(S.rate.updated_at)})) : '';
    $('whoName').textContent = S.me ? S.me.name : '';
    $('membersBtn').hidden = !S.isAdmin;
    const car = S.cars.find(c => c.id === S.carId);
    $('vGarage').hidden = !!car;
    $('vCar').hidden = !car;
    if (car){ document.title = car.name + ' · ' + t('titleSuffix'); renderCar(car); }
    else { document.title = t('titleSuffix'); renderGarage(); }
  }

  // numbers across the cars on screen (members only, since this page needs sign-in)
  function renderSummary(cars){
    $('summary').hidden = !cars.length;
    if (!cars.length) return;
    let repair = 0, paid = 0, next = null;
    for (const c of cars){
      const tt = totals(carItems(c.id)); repair += tt.projected; paid += tt.paid;
      if (stageOf(c) !== 'ready' && (!next || daysLeft(c) < daysLeft(next))) next = c;
    }
    const active = cars.filter(c => stageOf(c) !== 'ready').length;
    const tiles = [
      {k:t('sumCars'), v:String(cars.length)},
      {k:t('sumRepair'), v:fmt(repair)},
      {k:t('sumPaid'), v:fmt(paid)},
      {k:t('sumActive'), v:t('ofN', {a:active, b:cars.length})},
      {k:t('sumNext'), v: next ? (daysLeft(next) === 1 ? t('dayShort') : t('daysShort', {n:daysLeft(next)})) : '—', sub: next ? next.name : ''}
    ];
    $('summary').innerHTML = tiles.map(x => `<div class="stat"><p class="k">${esc(x.k)}</p><p class="v num">${esc(x.v)}</p>${x.sub ? `<p class="k">${esc(x.sub)}</p>` : ''}</div>`).join('');
  }

  function renderGarage(){
    const cars = S.cars.filter(c => S.scope === 'all' || isMine(c));
    renderSummary(cars);
    if (!cars.length){
      $('cars').innerHTML = `<div class="empty"><p>${esc(S.scope === 'mine' && S.cars.length ? t('noMyCars') : t('noCars'))}</p><button class="btn primary" type="button" data-act="addcar">${esc(t('addCar'))}</button></div>`;
      return;
    }
    $('cars').innerHTML = '<div class="cars">' + cars.map(c => {
      const its = carItems(c.id), tt = totals(its);
      const p = num(c.purchase);
      const pic = c.cover_path && urlFor(c.cover_path) ? `<img src="${esc(urlFor(c.cover_path))}" alt="" loading="lazy">` : carArt();
      return `<button class="card" type="button" data-car="${esc(c.id)}">
        <div class="pic">${pic}${isMine(c) ? `<span class="mine">${esc(t('yours'))}</span>` : ''}${chipsHtml(c)}</div>
        <div class="body">
          <h2>${esc(c.name)}</h2>
          <p class="owner">${esc(isMine(c) ? t('ownerYou') : t('ownerBy', {name:c.owner_name || '—'}))}</p>
          <div class="stack">${stepsHtml(c)}</div>
          <div class="fig num">${fmt(tt.projected)}</div>
          <div class="sub">${esc(t('cardRepair', {v:''}).trim())} · ${esc(t(its.length === 1 ? 'cardItems1' : 'cardItemsN', {n:its.length}))}</div>
          ${p != null ? `<div class="sub num">${esc(t('cardAllIn', {v:fmt(conv(p, c.purchase_cur) + tt.projected)}))}</div>` : ''}
        </div>
      </button>`;
    }).join('') + '</div>';
  }

  function renderCar(car){
    const mine = isMine(car);
    $('carName').textContent = car.name;
    $('carOwner').textContent = mine ? t('ownerYou') : t('ownerBy', {name:car.owner_name || '—'});
    $('editCarBtn').hidden = !mine;
    $('addItemBtn').hidden = !mine;
    $('addPhotoBtn').hidden = !mine;
    $('photoTag').hidden = !mine;
    $('progress').innerHTML = `<div class="status">${statusLine(car)}</div>${stepsHtml(car)}`;

    const items = carItems(car.id), tt = totals(items);
    $('total').textContent = fmt(tt.projected);
    const cats = CATS.filter(c => tt.byCat[c] > 0).sort((a,b) => tt.byCat[b] - tt.byCat[a]);
    $('bar').innerHTML = tt.projected > 0 ? cats.map(c => `<span style="width:${(tt.byCat[c]/tt.projected*100).toFixed(2)}%;background:var(--c-${c})"></span>`).join('') : '';
    $('legend').innerHTML = cats.map(c => `<li><i style="background:var(--c-${c})"></i>${esc(catLabel(c))} <b class="num">${fmt(tt.byCat[c])}</b></li>`).join('');

    const stats = [{k:t('paidSoFar'), v:fmt(tt.paid)}, {k:t('stillToPay'), v:fmt(tt.remaining)}];
    if (tt.varianceCount){
      const over = tt.variance > 0.005, under = tt.variance < -0.005;
      stats.push({k: over ? t('overEst') : under ? t('underEst') : t('onEst'), v:fmt(Math.abs(tt.variance)), cls: over ? 'bad' : under ? 'good' : ''});
    }
    stats.push({k:t('stillEst'), v:t('ofN', {a:tt.estOnly, b:items.length})});
    const p = num(car.purchase), sale = num(car.sale);
    if (p != null){
      const allIn = conv(p, car.purchase_cur) + tt.projected;
      stats.push({k:t('allIn'), v:fmt(allIn)});
      if (sale != null){
        const m = conv(sale, car.sale_cur) - allIn;
        stats.push({k: m >= 0 ? t('profit') : t('loss'), v:fmt(Math.abs(m)), cls: m >= 0 ? 'good' : 'bad'});
      }
    }
    $('stats').innerHTML = stats.map(x => `<div class="stat"><p class="k">${esc(x.k)}</p><p class="v num ${x.cls || ''}">${esc(x.v)}</p></div>`).join('');

    const coverUrl = car.cover_path && urlFor(car.cover_path);
    $('cover').innerHTML = coverUrl ? `<img src="${esc(coverUrl)}" alt="${esc(t('carPhotoAlt', {car:car.name}))}">` : carArt();

    renderList(car, items, mine);
    renderGallery(car, mine);
  }

  function renderList(car, all, mine){
    const q = S.q.trim().toLowerCase();
    let items = all.filter(it => (S.status === 'all' || it.status === S.status) &&
      (!q || [it.name, it.name_ka, it.note, catLabel(it.cat)].some(s => (s || '').toLowerCase().includes(q))));
    const by = {
      added:(a,b) => a.created_at < b.created_at ? -1 : 1,
      cost:(a,b) => conv(lineEff(b), b.cur) - conv(lineEff(a), a.cur),
      cat:(a,b) => CATS.indexOf(a.cat) - CATS.indexOf(b.cat) || (a.created_at < b.created_at ? -1 : 1),
      status:(a,b) => STAT_ORDER[a.status] - STAT_ORDER[b.status] || (a.created_at < b.created_at ? -1 : 1)
    }[S.sort];
    items = items.slice().sort(by);
    if (!all.length){
      $('list').innerHTML = `<div class="empty"><p>${esc(mine ? t('emptyItemsOwn') : t('emptyItems'))}</p>${mine ? `<button class="btn primary" type="button" data-act="additem">${esc(t('addCost'))}</button>` : ''}</div>`;
      return;
    }
    if (!items.length){
      $('list').innerHTML = `<div class="empty"><p>${esc(t('emptyMatch'))}</p><button class="btn" type="button" data-act="clear">${esc(t('clearFilters'))}</button></div>`;
      return;
    }
    let sum = 0;
    const rows = items.map(it => {
      const e = lineEst(it), a = lineAct(it);
      sum += conv(lineEff(it), it.cur);
      const estTxt = e == null ? '<span class="dim">—</span>' : fmt(e, it.cur) + (it.cur !== display ? `<span class="note">${fmt(conv(e, it.cur))}</span>` : '');
      let actTxt = `<span class="dim">${esc(t('notYet'))}</span>`;
      if (a != null){
        actTxt = fmt(a, it.cur);
        if (e != null && Math.abs(a - e) > 0.005){ const over = a > e; actTxt += `<span class="diff ${over ? 'over' : 'under'}">${over ? '+' : '−'}${fmt(Math.abs(a - e), it.cur)}</span>`; }
      }
      const nm = itemName(it), qty = it.qty > 1 ? ` <span class="dim">×${it.qty}</span>` : '';
      const tag = mine ? 'button' : 'div';
      return `<${tag} class="row${mine ? ' edit' : ''}" ${mine ? `type="button" data-item="${esc(it.id)}" aria-label="${esc(t('editCost'))}: ${esc(nm)}"` : ''}>
        <span class="c-name"><span class="name">${esc(nm)}${qty}</span>${it.note ? `<span class="note">${esc(it.note)}</span>` : ''}</span>
        <span class="c-meta"><span class="c-cat"><span class="cat"><span class="dot" style="background:var(--c-${it.cat})"></span>${esc(catLabel(it.cat))}</span></span><span class="c-status"><span class="pill ${it.status}">${esc(statLabel(it.status))}</span></span></span>
        <span class="c-est r amt num">${estTxt}</span>
        <span class="c-act r amt num">${actTxt}</span>
      </${tag}>`;
    }).join('');
    const filtered = items.length !== all.length;
    const countTxt = filtered ? t('countShown', {n:items.length}) : t(items.length === 1 ? 'count1' : 'countN', {n:items.length});
    $('list').innerHTML = `<div class="head"><span>${esc(t('hItem'))}</span><span>${esc(t('hCat'))}</span><span>${esc(t('hStatus'))}</span><span class="r">${esc(t('hEst'))}</span><span class="r">${esc(t('hAct'))}</span></div>${rows}
      <div class="foot"><span>${esc(countTxt)}</span><span class="num">${esc(t(filtered ? 'shownTotal' : 'total', {v:fmt(sum)}))}</span></div>`;
  }

  function renderGallery(car, mine){
    const photos = carPhotos(car.id);
    if (!photos.length){ $('gallery').innerHTML = `<p class="photos-empty">${esc(mine ? t('photosEmptyCan') : t('photosEmpty'))}</p>`; return; }
    $('gallery').innerHTML = '<div class="gallery">' + photos.map(p =>
      `<button class="thumb" type="button" data-photo="${esc(p.id)}" aria-label="${esc(t('openPhoto'))}"><img src="${esc(urlFor(p.path))}" alt="" loading="lazy">${p.path === car.cover_path ? `<span class="badge">${esc(t('cover'))}</span>` : ''}${tagOf(p) !== 'progress' ? `<span class="badge tag">${esc(t('tag_' + tagOf(p)))}</span>` : ''}</button>`).join('') + '</div>';
  }

  // ---------- navigation ----------
  function openCar(id){ S.carId = id; S.q = ''; S.status = 'all'; $('q').value = ''; $('fStatus').value = 'all'; location.hash = id ? 'car-' + id : ''; render(); window.scrollTo(0, 0); }
  function syncFromHash(){ const m = /^#car-([0-9a-f-]{36})$/.exec(location.hash); S.carId = m && S.cars.some(c => c.id === m[1]) ? m[1] : null; render(); }
  window.addEventListener('hashchange', syncFromHash);
  $('brand').addEventListener('click', () => openCar(null));
  $('backBtn').addEventListener('click', () => openCar(null));
  document.querySelectorAll('#scopeSeg button').forEach(b => b.addEventListener('click', () => { S.scope = b.dataset.scope; store.set('cc-scope', S.scope); render(); }));
  $('cars').addEventListener('click', e => {
    const c = e.target.closest('[data-car]'); if (c) return openCar(c.dataset.car);
    if (e.target.closest('[data-act="addcar"]')) openCarEditor(null);
  });
  $('addCarBtn').addEventListener('click', () => openCarEditor(null));
  $('q').addEventListener('input', () => { S.q = $('q').value; render(); });
  $('fStatus').addEventListener('change', () => { S.status = $('fStatus').value; render(); });
  $('sort').addEventListener('change', () => { S.sort = $('sort').value; render(); });
  $('list').addEventListener('click', e => {
    const r = e.target.closest('[data-item]'); if (r) return openItemEditor(S.items.find(i => i.id === r.dataset.item));
    const a = e.target.closest('[data-act]'); if (!a) return;
    if (a.dataset.act === 'additem') openItemEditor(null);
    if (a.dataset.act === 'clear'){ S.q = ''; S.status = 'all'; $('q').value = ''; $('fStatus').value = 'all'; render(); }
  });
  $('addItemBtn').addEventListener('click', () => openItemEditor(null));

  // ---------- shared exchange rate ----------
  let rateTimer = null;
  $('rate').addEventListener('input', () => {
    const r = num($('rate').value);
    if (!r || r <= 0) return;
    clearTimeout(rateTimer);
    rateTimer = setTimeout(async () => {
      const row = {usd_gel:r, updated_at:new Date().toISOString(), updated_by:S.me.name};
      const {error} = await sb.from('app_settings').update(row).eq('id', 1);
      if (error) return fail(error);
      Object.assign(S.rate, row); render(); toast(t('rateSaved'));
    }, 900);
  });

  // ---------- car editor ----------
  let editingCar = null;
  const resetCarDel = armable($('carDel'), 'deleteCar', 'confirmDeleteCar', async () => {
    const car = editingCar; if (!car) return;
    const paths = carPhotos(car.id).map(p => p.path);
    if (paths.length) await sb.storage.from(BUCKET).remove(paths);
    const {error} = await sb.from('cars').delete().eq('id', car.id);
    if (error) return fail(error);
    S.cars = S.cars.filter(c => c.id !== car.id); S.items = S.items.filter(i => i.car_id !== car.id); S.photos = S.photos.filter(p => p.car_id !== car.id);
    $('carDlg').close(); openCar(null);
  });
  function openCarEditor(car){
    editingCar = car;
    $('carTitle').textContent = car ? t('editCar') : t('newCar');
    $('carSave').textContent = car ? t('saveCar') : t('addCar');
    $('carDel').hidden = !car; resetCarDel();
    $('cName').value = car ? car.name : '';
    $('cPurchase').value = car && car.purchase != null ? car.purchase : '';
    $('cPurchaseCur').value = car ? car.purchase_cur : 'USD';
    $('cSale').value = car && car.sale != null ? car.sale : '';
    $('cSaleCur').value = car ? car.sale_cur : 'USD';
    const plan = car ? planOf(car) : DEFAULT_PLAN;
    $('cStage').value = car ? stageOf(car) : 'bought';
    $('cLeft').value = car ? wholeDays(car.stage_left) : 0;
    $('cPlanShipping').value = plan.shipping; $('cPlanRepair').value = plan.repair; $('cPlanPaint').value = plan.paint;
    $('carErr').textContent = '';
    openDlg($('carDlg'));
  }
  $('editCarBtn').addEventListener('click', () => openCarEditor(S.cars.find(c => c.id === S.carId)));
  // moving to another stage starts that stage's planned days
  $('cStage').addEventListener('change', () => {
    const planned = {shipping:'cPlanShipping', repair:'cPlanRepair', paint:'cPlanPaint'}[$('cStage').value];
    $('cLeft').value = planned ? wholeDays($(planned).value) : 0;
  });
  $('carForm').addEventListener('submit', async e => {
    e.preventDefault();
    const name = $('cName').value.trim();
    if (!name){ $('carErr').textContent = t('errCarName'); return; }
    const pv = $('cPurchase').value.trim(), sv = $('cSale').value.trim();
    const row = {name, purchase: pv === '' ? null : num(pv), purchase_cur:$('cPurchaseCur').value, sale: sv === '' ? null : num(sv), sale_cur:$('cSaleCur').value};
    if ((row.purchase ?? 0) < 0 || (row.sale ?? 0) < 0){ $('carErr').textContent = t('errNeg'); return; }
    const days = ['cLeft','cPlanShipping','cPlanRepair','cPlanPaint'].map(id => num($(id).value) ?? 0);
    if (days.some(d => d < 0)){ $('carErr').textContent = t('errNeg'); return; }
    Object.assign(row, {stage:$('cStage').value, stage_left:wholeDays(days[0]), plan:{shipping:wholeDays(days[1]), repair:wholeDays(days[2]), paint:wholeDays(days[3])}});
    $('carSave').disabled = true;
    const res = editingCar
      ? await sb.from('cars').update(row).eq('id', editingCar.id).select().single()
      : await sb.from('cars').insert(Object.assign({owner_name:S.me.name}, row)).select().single();
    $('carSave').disabled = false;
    if (res.error) return fail(res.error);
    const i = S.cars.findIndex(c => c.id === res.data.id);
    if (i >= 0) S.cars[i] = res.data; else S.cars.push(res.data);
    $('carDlg').close();
    if (!editingCar) openCar(res.data.id); else render();
  });

  // ---------- item editor ----------
  let editingItem = null;
  const resetItemDel = armable($('itemDel'), 'del', 'confirmDelete', async () => {
    const it = editingItem; if (!it) return;
    const {error} = await sb.from('items').delete().eq('id', it.id);
    if (error) return fail(error);
    S.items = S.items.filter(i => i.id !== it.id);
    $('itemDlg').close(); render();
  });
  function openItemEditor(it){
    editingItem = it;
    $('itemTitle').textContent = it ? t('editCost') : t('addCost');
    $('itemSave').textContent = it ? t('saveChanges') : t('addCost');
    $('itemDel').hidden = !it; resetItemDel();
    const carIts = carItems(S.carId);
    $('fName').value = it ? it.name : '';
    $('fNameKa').value = it ? it.name_ka : '';
    $('fCat').value = it ? it.cat : 'parts';
    $('fStat').value = it ? it.status : 'estimate';
    $('fEst').value = it && it.est != null ? it.est : '';
    $('fAct').value = it && it.act != null ? it.act : '';
    $('fCur').value = it ? it.cur : (carIts.length ? carIts[carIts.length - 1].cur : display);
    $('fQty').value = it ? it.qty : 1;
    $('fNote').value = it ? it.note : '';
    $('itemErr').textContent = '';
    openDlg($('itemDlg'));
    setTimeout(() => (lang === 'ka' ? $('fNameKa') : $('fName')).focus(), 30);
  }
  $('itemForm').addEventListener('submit', async e => {
    e.preventDefault();
    const name = $('fName').value.trim(), name_ka = $('fNameKa').value.trim();
    const est = $('fEst').value.trim() === '' ? null : num($('fEst').value);
    const act = $('fAct').value.trim() === '' ? null : num($('fAct').value);
    if (!name && !name_ka){ $('itemErr').textContent = t('errName'); return; }
    if (est == null && act == null){ $('itemErr').textContent = t('errCost'); return; }
    if ((est ?? 0) < 0 || (act ?? 0) < 0){ $('itemErr').textContent = t('errNeg'); return; }
    const row = {name, name_ka, cat:$('fCat').value, status:$('fStat').value, est, act, cur:$('fCur').value,
      qty:Math.max(1, Math.round(num($('fQty').value) || 1)), note:$('fNote').value.trim()};
    $('itemSave').disabled = true;
    const res = editingItem
      ? await sb.from('items').update(row).eq('id', editingItem.id).select().single()
      : await sb.from('items').insert(Object.assign({car_id:S.carId}, row)).select().single();
    $('itemSave').disabled = false;
    if (res.error) return fail(res.error);
    const i = S.items.findIndex(x => x.id === res.data.id);
    if (i >= 0) S.items[i] = res.data; else S.items.push(res.data);
    $('itemDlg').close(); render();
  });

  // ---------- photos ----------
  $('addPhotoBtn').addEventListener('click', () => $('fileIn').click());
  $('fileIn').addEventListener('change', () => { const files = Array.from($('fileIn').files || []); $('fileIn').value = ''; if (files.length) uploadAll(files); });
  function loadImg(file){ return new Promise((res, rej) => { const u = URL.createObjectURL(file); const i = new Image(); i.onload = () => res(i); i.onerror = () => { URL.revokeObjectURL(u); rej(new Error('decode')); }; i.src = u; }); }
  async function toJpeg(file){
    let src; try { src = await createImageBitmap(file); } catch (_) { src = await loadImg(file); }
    const max = 2000, w0 = src.width || src.naturalWidth, h0 = src.height || src.naturalHeight;
    const sc = Math.min(1, max / Math.max(w0, h0)), w = Math.round(w0 * sc), h = Math.round(h0 * sc);
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h; cv.getContext('2d').drawImage(src, 0, 0, w, h);
    return new Promise((res, rej) => cv.toBlob(b => b ? res(b) : rej(new Error('encode')), 'image/jpeg', 0.86));
  }
  function setUpl(text, err){ $('upl').textContent = text || ''; $('upl').classList.toggle('err', !!err); }
  async function uploadAll(files){
    const car = S.cars.find(c => c.id === S.carId); if (!isMine(car)) return;
    $('addPhotoBtn').disabled = true;
    const tag = TAGS.includes($('photoTag').value) ? $('photoTag').value : 'progress';
    let done = 0, failed = 0;
    for (let i = 0; i < files.length; i++){
      setUpl(t('uploading', {i:i + 1, n:files.length}));
      try {
        const blob = await toJpeg(files[i]);
        const path = `${S.me.id}/${car.id}/${crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + i}.jpg`;
        const up = await sb.storage.from(BUCKET).upload(path, blob, {contentType:'image/jpeg', upsert:false});
        if (up.error) throw up.error;
        const ins = await sb.from('photos').insert({car_id:car.id, path, tag}).select().single();
        if (ins.error){ await sb.storage.from(BUCKET).remove([path]); throw ins.error; }
        S.photos.push(ins.data);
        if (!car.cover_path){
          const cu = await sb.from('cars').update({cover_path:path}).eq('id', car.id).select().single();
          if (!cu.error) Object.assign(car, cu.data);
        }
        await signedUrls([path]);
        done++; render();
      } catch (err){ console.error(err); failed++; }
    }
    $('addPhotoBtn').disabled = false;
    setUpl(failed ? t('someFailed', {d:done, f:failed}) : '', !!failed);
    render();
  }

  let viewing = null;
  const resetPhotoDel = armable($('vDel'), 'deletePhoto', 'confirmDelete', async () => {
    const p = viewing; if (!p) return;
    const car = S.cars.find(c => c.id === p.car_id);
    const {error} = await sb.from('photos').delete().eq('id', p.id);
    if (error) return fail(error);
    await sb.storage.from(BUCKET).remove([p.path]);
    S.photos = S.photos.filter(x => x.id !== p.id);
    if (car && car.cover_path === p.path){
      const next = carPhotos(car.id)[0];
      const cu = await sb.from('cars').update({cover_path: next ? next.path : null}).eq('id', car.id).select().single();
      if (!cu.error) Object.assign(car, cu.data);
    }
    $('viewer').close(); render();
  });
  function openViewer(p){
    viewing = p; resetPhotoDel();
    const car = S.cars.find(c => c.id === p.car_id), mine = isMine(car);
    $('vImg').src = urlFor(p.path); $('vImg').alt = t('carPhotoAlt', {car: car ? car.name : ''});
    $('vDel').hidden = !mine;
    $('vTag').hidden = !mine; $('vTag').value = tagOf(p);
    $('vCover').hidden = !mine || (car && car.cover_path === p.path);
    openDlg($('viewer'));
  }
  $('gallery').addEventListener('click', e => { const b = e.target.closest('[data-photo]'); if (b) openViewer(S.photos.find(p => p.id === b.dataset.photo)); });
  $('cover').addEventListener('click', e => {
    const car = S.cars.find(c => c.id === S.carId);
    if (e.target.tagName === 'IMG' && car && car.cover_path){ const p = S.photos.find(x => x.path === car.cover_path); if (p) openViewer(p); }
  });
  $('vTag').addEventListener('change', async () => {
    const p = viewing; if (!p) return;
    const {data, error} = await sb.from('photos').update({tag:$('vTag').value}).eq('id', p.id).select().single();
    if (error){ $('vTag').value = tagOf(p); return fail(error); }
    Object.assign(p, data); render();
  });
  $('vCover').addEventListener('click', async () => {
    const p = viewing; if (!p) return;
    const cu = await sb.from('cars').update({cover_path:p.path}).eq('id', p.car_id).select().single();
    if (cu.error) return fail(cu.error);
    const car = S.cars.find(c => c.id === p.car_id); if (car) Object.assign(car, cu.data);
    $('vCover').hidden = true; render();
  });

  // ---------- CSV ----------
  $('exportBtn').addEventListener('click', () => {
    const car = S.cars.find(c => c.id === S.carId); if (!car) return;
    const rows = [t('csv').map(h => h.replace('{c}', display))];
    for (const it of carItems(car.id).sort((a,b) => a.created_at < b.created_at ? -1 : 1)){
      rows.push([it.name, it.name_ka, catLabel(it.cat), statLabel(it.status), it.qty, it.est ?? '', it.act ?? '', it.cur, conv(lineEff(it), it.cur).toFixed(2), it.note]);
    }
    const csv = '\ufeff' + rows.map(r => r.map(v => { const s = String(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }).join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], {type:'text/csv;charset=utf-8'}));
    a.download = (car.name.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase() || 'car') + '-costs.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });

  // ---------- members (admins) ----------
  async function loadMembers(){
    const {data, error} = await sb.from('members').select('*').order('added_at');
    if (error) return fail(error, 'errLoad');
    $('memList').innerHTML = data.map(m => {
      const self = m.email === S.me.email;
      return `<li><span class="em">${esc(m.email)}${m.is_admin ? ` <span class="pill">${esc(t('admin'))}</span>` : ''}${self ? ` <span class="dim">(${esc(t('you'))})</span>` : ''}</span>${self ? '' : `<button class="btn small danger" type="button" data-email="${esc(m.email)}">${esc(t('remove'))}</button>`}</li>`;
    }).join('');
  }
  $('membersBtn').addEventListener('click', async () => { $('memErr').textContent = ''; $('memEmail').value = ''; await loadMembers(); openDlg($('memDlg')); });
  $('memList').addEventListener('click', async e => {
    const b = e.target.closest('[data-email]'); if (!b) return;
    if (!b.classList.contains('armed')){ b.classList.add('armed'); b.textContent = t('confirmRemove'); setTimeout(() => { b.classList.remove('armed'); b.textContent = t('remove'); }, 4000); return; }
    const {error} = await sb.from('members').delete().eq('email', b.dataset.email);
    if (error) return fail(error);
    loadMembers();
  });
  $('memForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = $('memEmail').value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ $('memErr').textContent = t('errEmail'); return; }
    const {error} = await sb.from('members').insert({email});
    if (error){ $('memErr').textContent = error.code === '23505' ? t('errExists') : t('errSave'); return; }
    $('memErr').textContent = ''; $('memEmail').value = ''; loadMembers();
  });

  // ---------- sign in / out ----------
  document.querySelectorAll('.gsign').forEach(b => b.addEventListener('click', async () => {
    const {error} = await sb.auth.signInWithOAuth({provider:'google', options:{redirectTo: location.origin + location.pathname}});
    if (error) fail(error, 'errSignin');
  }));

  // ---------- landing page (visitors): stage, days left and showcase photos only, never costs ----------
  const P = {cars:[]};
  const LOCK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  function showcaseFig(path, cls, label, note){
    return path && urlFor(path)
      ? `<figure class="${cls}"><img src="${esc(urlFor(path))}" alt="" loading="lazy"><figcaption>${esc(label)}</figcaption></figure>`
      : `<figure class="${cls} nophoto" data-note="${esc(note)}"><figcaption>${esc(label)}</figcaption></figure>`;
  }
  function renderLanding(){
    // the banner shows the newest car's cover photo, or the drawing until there is one
    const heroCar = P.cars.slice().reverse().find(c => c.cover_path && !isSitePhoto(c.cover_path) && urlFor(c.cover_path));
    $('heroArt').innerHTML = heroCar ? `<img src="${esc(urlFor(heroCar.cover_path))}" alt="${esc(t('carPhotoAlt', {car:heroCar.name}))}">` : carArt();
    $('heroArt').classList.toggle('photo', !!heroCar);
    $('heroArt').parentElement.hidden = !heroCar; // without a real photo the banner background picture is enough
    $('pubGarage').hidden = !P.cars.length;
    $('pubCars').innerHTML = P.cars.map(c => {
      const st = stageOf(c);
      const cover = c.cover_path && urlFor(c.cover_path);
      return `<article class="proj">
        <div class="pic">${cover ? `<img src="${esc(cover)}" alt="${esc(t('carPhotoAlt', {car:c.name}))}" loading="lazy">` : carArt()}${chipsHtml(c)}</div>
        <div class="body">
          <h3>${esc(c.name)}</h3>
          ${stepsHtml(c)}
          <div class="ba">${showcaseFig(c.before_path, 'before', t('tag_before'), t('noBefore'))}${showcaseFig(c.after_path, 'after', t('tag_after'), t(st === 'ready' ? 'noAfter' : 'afterWait'))}</div>
          <div class="cost"><span>${esc(t('repairCost'))}</span><span class="lock">${LOCK_SVG}${esc(t('membersOnly'))}</span></div>
        </div></article>`;
    }).join('');
  }
  async function loadPublic(){
    const {data, error} = await sb.rpc('public_garage');
    if (error || !Array.isArray(data)){ if (error) console.warn(error); return; } // before the SQL is applied the page just has no cars section
    P.cars = data;
    await signedUrls(data.flatMap(c => [c.cover_path, c.before_path, c.after_path]).filter(Boolean));
    renderLanding();
  }
  const signOut = async () => { await sb.auth.signOut(); location.hash = ''; location.reload(); };
  $('signOut').addEventListener('click', signOut);
  $('deniedOut').addEventListener('click', signOut);

  async function loadAll(){
    const [cars, items, photos, settings] = await Promise.all([
      sb.from('cars').select('*').order('created_at'),
      sb.from('items').select('*'),
      sb.from('photos').select('*'),
      sb.from('app_settings').select('*').eq('id', 1).maybeSingle()
    ]);
    const err = cars.error || items.error || photos.error || settings.error;
    if (err) throw err;
    S.cars = cars.data; S.items = items.data; S.photos = photos.data;
    if (settings.data) S.rate = settings.data;
    await signedUrls([...S.photos.map(p => p.path), ...S.cars.map(c => c.cover_path)].filter(Boolean));
  }

  let started = false;
  async function start(session){
    if (!session){ show('vSignin'); applyLang(); loadPublic(); return; }
    if (started) return; started = true;
    const u = session.user, md = u.user_metadata || {};
    S.me = {id:u.id, email:(u.email || '').toLowerCase(), name: md.full_name || md.name || (u.email || '').split('@')[0]};
    const {data:member, error} = await sb.from('members').select('*').eq('email', S.me.email).maybeSingle();
    if (error || !member){
      if (error) console.error(error);
      $('deniedText').textContent = t('deniedText', {email:S.me.email, admin:cfg.adminName || 'the admin'});
      show('vDenied'); applyLang();
      $('deniedText').textContent = t('deniedText', {email:S.me.email, admin:cfg.adminName || 'the admin'});
      return;
    }
    S.isAdmin = !!member.is_admin;
    if (!member.display_name) sb.from('members').update({display_name:S.me.name}).eq('email', S.me.email).then(() => {});
    try { await loadAll(); } catch (e){ fail(e, 'errLoad'); }
    show('vApp');
    applyLang();
    syncFromHash();
  }

  applyLang();
  sb.auth.getSession().then(({data}) => start(data.session));
  sb.auth.onAuthStateChange((event, session) => { if (event === 'SIGNED_IN') start(session); });
})();
