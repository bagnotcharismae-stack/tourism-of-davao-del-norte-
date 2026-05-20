const destinations = [
  {
  name:"Kaputian Beach",
  city:"Island Garden City of Samal",
  category:"Beach",
  image:"images/kaputian_beach.jpg",
  description:"One of Samal Island's finest white-sand beaches with crystal-clear turquoise waters and stunning Davao Gulf views.",
  fullDesc:"Kaputian Beach is a pristine stretch of white sand on the southern tip of Samal Island offering calm, clear waters perfect for swimming, snorkeling, and kayaking. Several beach resorts offer cottages and fresh seafood meals. Spectacular sunsets over the Davao Gulf complete the experience.",
  activities:["Swimming","Snorkeling","Kayaking","Beach volleyball","Sunset viewing"],
    bestTime:"March to May (dry season)",
  fee:"₱30–₱100 entrance (resort-dependent)",
  hours:"Resorts open 6:00 AM – 8:00 PM",
  tips:"Arrive early on weekends to get the best spot. Bring your own snorkeling gear for reef exploration."
  },
  {
    name: "Maxima Beach",
    city: "Island Garden City of Samal",
    category: "Beach",
    image: "images/maxima_beach.jpg",
    description: "A beautiful, less-crowded Samal beach offering a peaceful retreat with fine white sand and calm shallow waters.",
    fullDesc: "Maxima Beach is a hidden gem on Samal Island offering a quieter, more intimate beach experience. Soft white sand and calm shallow waters make it ideal for families with children. The surrounding area features lush greenery and local fishing communities.",
    activities: ["Swimming", "Fishing", "Beach picnics", "Photography", "Relaxation"],
    bestTime: "November to May",
    fee: "₱50 entrance",
    hours: "6:00 AM – 6:00 PM",
    tips: "Pack your own food and drinks as facilities are limited. Best on weekdays for a quieter experience."
  },
  {
    name: "Buhangin Beach",
    city: "Island Garden City of Samal",
    category: "Beach",
    image: "images/buhangin.jpg",
    description: "A popular, family-friendly Samal beach with golden sand, calm warm waters, and resort facilities.",
    fullDesc: "Buhangin Beach is one of the most accessible beaches on Samal Island, making it a favorite day-trip spot for families from Davao City. Calm, warm waters and several resorts offer accommodation, water sports equipment, and seafood restaurants.",
    activities: ["Swimming", "Beach volleyball", "Water sports", "Family picnics", "Snorkeling"],
    bestTime: "March to June",
    fee: "₱50–₱150 resort entrance",
    hours: "6:00 AM – 6:00 PM",
    tips: "Accessible from the Babak ferry terminal. Weekday visits avoid the weekend crowds."
  },
  {
    name: "Carmen Beach",
    city: "Carmen",
    category: "Beach",
    image: "images/carmen_beach.jpg",
    description: "A unique coastal spot where the Tagum River meets the sea, offering a mix of river and sea swimming.",
    fullDesc: "Carmen Beach is a unique coastal area where the freshwater Tagum River meets the Davao Gulf, ideal for both river and sea swimming. Excellent for fishing and surrounded by mangrove forests and rice fields.",
    activities: ["Swimming", "Fishing", "River tubing", "Bird watching", "Picnicking"],
    bestTime: "December to May",
    fee: "Free",
    hours: "Open daily",
    tips: "Best swimming is during high tide. Watch out for boat traffic near the river mouth."
  },
  {
    name: "Mount Hamiguitan",
    city: "Island Garden City of Samal",
    category: "Mountain",
    image: "images/hamiguitan.jpg",
    description: "A UNESCO World Heritage Site — a biodiversity hotspot with rare pitcher plants, pygmy forest, and endemic wildlife.",
    fullDesc: "Mount Hamiguitan Range Wildlife Sanctuary is inscribed on the UNESCO World Heritage list for its outstanding universal biodiversity value. The mountain features a unique pygmy forest, carnivorous Nepenthes pitcher plants, and critically endangered species including the Philippine Eagle.",
    activities: ["Trekking", "Bird watching", "Wildlife observation", "Photography", "Research"],
    bestTime: "March to May",
    fee: "₱500 entrance + guide fees",
    hours: "Day treks start at 6:00 AM",
    tips: "Mandatory guided trekking. Register at the DENR office. Bring rain gear — weather changes quickly."
  },
  {
    name: "Urayas Peak",
    city: "Talaingod",
    category: "Mountain",
    image: "images/urayas_peak.jpg",
    description: "A challenging mountain rewarding trekkers with sweeping panoramic views of Davao del Norte's landscapes.",
    fullDesc: "Urayas Peak in Talaingod passes through diverse forest ecosystems and Manobo indigenous territories. The summit offers spectacular 360-degree views including the Davao Gulf on clear days.",
    activities: ["Trekking", "Camping", "Photography", "Cultural immersion", "Bird watching"],
    bestTime: "February to April",
    fee: "₱150 guide fee + ₱50 entrance",
    hours: "Treks start at 5:00 AM",
    tips: "Arrange a local Manobo guide through the municipal tourism office. Bring at least 3 liters of water per person."
  },
  {
    name: "Santo Tomas Highlands",
    city: "Santo Tomas",
    category: "Mountain",
    image: "images/botanical.jpg",
    description: "Cool highlands at 1,200m elevation offering coffee farm tours, zip-lining, and breathtaking mountain views.",
    fullDesc: "The Santo Tomas Highlands provide a cool climate perfect for Arabica and Robusta coffee cultivation. The Cambanogoy Agricultural School area offers farm tours, zip-lining, and stunning mountain vistas.",
    activities: ["Farm tours", "Zip-lining", "Coffee tasting", "Trekking", "Photography"],
    bestTime: "October to March",
    fee: "₱100–₱300 depending on activity",
    hours: "7:00 AM – 5:00 PM",
    tips: "Book coffee farm tours in advance. Bring a light jacket — mornings are cool at this altitude."
  },
  {
    name: "Talaingod Highland Trail",
    city: "Talaingod",
    category: "Mountain",
    image: "images/talaingod.jpg",
    description: "An epic multi-day trek through Manobo ancestral lands, montane forests, and stunning highland ridge viewpoints.",
    fullDesc: "This adventurous trail passes through old-growth montane forests, crystal-clear mountain streams, and Manobo villages where traditional culture remains vibrantly alive.",
    activities: ["Multi-day trekking", "Camping", "Cultural immersion", "River crossing", "Wildlife spotting"],
    bestTime: "February to April",
    fee: "Guide fees ₱500–₱800 per day",
    hours: "Multi-day; starts at 5:00 AM",
    tips: "Requires physical fitness and proper gear. Always go with a certified Manobo guide."
  },
  {
    name: "Hagimit Falls",
    city: "Island Garden City of Samal",
    category: "Waterfall",
    image: "images/hagimit.jpg",
    description: "A picturesque multi-tiered waterfall on Samal Island — a refreshing escape hidden within tropical forest.",
    fullDesc: "Hagimit Falls is one of Samal Island's best-kept secrets — a beautiful multi-tiered waterfall hidden within dense forest.",
    activities: ["Swimming", "Waterfall rappelling", "Trekking", "Photography", "Picnicking"],
    bestTime: "Year-round (best flow June–October)",
    fee: "₱50 entrance",
    hours: "7:00 AM – 5:00 PM",
    tips: "Wear water shoes — rocks can be slippery. The trek takes about 20 minutes."
  },
  {
    name: "Kapalong River Falls",
    city: "Kapalong",
    category: "Waterfall",
    image: "images/kapalong_river.jpg",
    description: "A series of cascading waterfalls along the Kapalong River with natural swimming pools and scenic views.",
    fullDesc: "The Kapalong River features beautiful waterfalls and natural pools nestled between rice terraces and tropical vegetation.",
    activities: ["Swimming", "River hiking", "Photography", "Picnicking"],
    bestTime: "March to November",
    fee: "Free",
    hours: "Daylight hours",
    tips: "Visit after a rainy period for stronger water flow."
  },
  {
    name: "Mainit Hot Spring & Falls",
    city: "Asuncion",
    category: "Waterfall",
    image: "images/mainit.jpg",
    description: "A unique natural wonder where geothermal hot springs meet a cool mountain waterfall.",
    fullDesc: "Mainit is remarkable where geothermal hot springs bubble alongside a cool waterfall.",
    activities: ["Hot spring bathing", "Swimming", "Photography", "Picnicking"],
    bestTime: "Year-round",
    fee: "₱30 per person",
    hours: "7:00 AM – 6:00 PM",
    tips: "Start with cooler pools before hotter sections."
  },
  {
    name: "Sanipaan Falls",
    city: "New Corella",
    category: "Waterfall",
    image: "images/sanipaan.jpg",
    description: "A stunning 30-meter waterfall in New Corella surrounded by virgin forest, accessible via a riverside trek.",
    fullDesc: "Sanipaan Falls drops dramatically over a 30-meter cliff into a wide crystal-clear pool.",
    activities: ["Swimming", "Trekking", "Photography", "Cliff diving"],
    bestTime: "June to December",
    fee: "₱20 guide fee",
    hours: "7:00 AM – 5:00 PM",
    tips: "Hire a local guide due to multiple trail forks."
  },
  {
    name: "D' Bone Collector Museum",
    city: "Tagum City",
    category: "Historical Site",
    image: "images/bone_museum.jpg",
    description: "A unique museum with one of the world's largest private collections of animal skeletons.",
    fullDesc: "The D' Bone Collector Museum houses thousands of animal skeletons including rare species.",
    activities: ["Museum tour", "Educational visits", "Photography", "Conservation awareness"],
    bestTime: "Year-round",
    fee: "₱100 adults, ₱50 children",
    hours: "8:00 AM – 5:00 PM daily",
    tips: "Allocate at least 2 hours for the visit."
  },
  {
    name: "Tagum City Hall & Rizal Park",
    city: "Tagum City",
    category: "Historical Site",
    image: "images/rizal_park.jpg",
    description: "The historic civic heart of Tagum City surrounded by landscaped gardens.",
    fullDesc: "Tagum City Hall is set within Rizal Park featuring musical fountain shows.",
    activities: ["Historical tours", "Park strolling", "Fountain shows", "Photography"],
    bestTime: "Year-round",
    fee: "Free",
    hours: "5:00 AM – 10:00 PM",
    tips: "Visit fountain shows on Friday and Saturday nights."
  },
  {
    name: "Carmen Municipal Hall",
    city: "Carmen",
    category: "Historical Site",
    image: "images/carmen_hall.jpg",
    description: "A civic landmark featuring Spanish colonial influences.",
    fullDesc: "The Carmen Municipal Hall reflects the town's history and civic pride.",
    activities: ["Historical tours", "Photography", "Plaza strolling", "Cultural events"],
    bestTime: "Year-round",
    fee: "Free",
    hours: "Mon–Fri, 8:00 AM – 5:00 PM",
    tips: "Best visited during festivals."
  },
  {
    name: "Parish Church of Carmen",
    city: "Carmen",
    category: "Historical Site",
    image: "images/parish_carmen.jpg",
    description: "One of the oldest Catholic churches in Davao del Norte.",
    fullDesc: "A spiritual center with historic architecture and ancient trees.",
    activities: ["Religious visits", "Heritage tours", "Photography", "Reflection"],
    bestTime: "Year-round",
    fee: "Free",
    hours: "5:00 AM – 9:00 PM",
    tips: "Dress modestly."
  },
  {
    name: "Samal Island",
    city: "Island Garden City of Samal",
    category: "Island",
    image: "images/samal.jpg",
    description: "The 'Garden City of Samal' — an island paradise with world-class resorts.",
    fullDesc: "Samal Island offers beaches, dive sites, resorts, and caves near Davao City.",
    activities: ["Swimming", "Diving", "Snorkeling", "Island hopping", "Caving"],
    bestTime: "March to June",
    fee: "Ferry ₱60–₱100",
    hours: "24/7 ferries",
    tips: "Book accommodations early."
  },
  {
    name: "Talicud Island",
    city: "Island Garden City of Samal",
    category: "Island",
    image: "images/talicud_island.jpg",
    description: "A quieter island with untouched beaches and fishing villages.",
    fullDesc: "Known for crystal waters and authentic island life.",
    activities: ["Swimming", "Snorkeling", "Fishing", "Trekking"],
    bestTime: "March to May",
    fee: "Boat ₱300–₱500",
    hours: "Daylight hours",
    tips: "Bring supplies."
  },
  {
    name: "Pearl Farm Island",
    city: "Island Garden City of Samal",
    category: "Island",
    image: "images/pearl_farm.jpg",
    description: "Luxury eco-resort on a former pearl farm island.",
    fullDesc: "A world-renowned resort with overwater villas.",
    activities: ["Resort stay", "Snorkeling", "Dining", "Island tours"],
    bestTime: "Year-round",
    fee: "₱8,000+/night",
    hours: "9:00 AM – 5:00 PM (day tours)",
    tips: "Book in advance."
  },
  {
    name: "Vanishing Island",
    city: "Island Garden City of Samal",
    category: "Island",
    image: "images/vanishing.jpg",
    description: "A sandbar that disappears during high tide.",
    fullDesc: "A surreal white sandbar visible only during low tide.",
    activities: ["Swimming", "Photography", "Snorkeling"],
    bestTime: "March to May",
    fee: "Boat ₱200–₱400",
    hours: "6:00 AM – 12:00 PM",
    tips: "Check tide schedules."
  },
  {
    name: "Tagum City Night Market",
    city: "Tagum City",
    category: "Food Destination",
    image: "images/night_market.jpg",
    description: "A vibrant food hub with grilled local delicacies.",
    fullDesc: "A popular night market offering Mindanao street food culture.",
    activities: ["Food tasting", "Shopping", "Photography"],
    bestTime: "Weekends",
    fee: "Free",
    hours: "4:00 PM – 12:00 AM",
    tips: "Try grilled tuna panga."
  },
  {
    name: "Cambanogoy Coffee Farms",
    city: "Santo Tomas",
    category: "Food Destination",
    image: "images/cambanogoy.jpg",
    description: "Highland coffee farms offering farm-to-cup experiences.",
    fullDesc: "Premier coffee-growing area in Davao del Norte.",
    activities: ["Coffee tours", "Tasting", "Hiking"],
    bestTime: "October to February",
    fee: "₱200 tour",
    hours: "7:00 AM – 5:00 PM",
    tips: "Book in advance."
  },
  {
    name: "Panabo Public Market",
    city: "Panabo City",
    category: "Food Destination",
    image: "images/panabo.jpg",
    description: "Famous for banana products and local delicacies.",
    fullDesc: "Known as the Banana Capital market hub.",
    activities: ["Shopping", "Food tasting"],
    bestTime: "Morning",
    fee: "Free",
    hours: "4:00 AM – 6:00 PM",
    tips: "Visit early."
  },
  {
    name: "Tagum Food Strip",
    city: "Tagum City",
    category: "Food Destination",
    image: "images/tagum_city.jpg",
    description: "Restaurant strip with diverse dining options.",
    fullDesc: "Lively dining area along Santiago Boulevard.",
    activities: ["Dining", "Cafe hopping", "Live music"],
    bestTime: "Evenings",
    fee: "Varies",
    hours: "5:00 PM – 12:00 AM",
    tips: "Try seafood restaurants."
  },
  {
    name: "Monfort Bat Cave",
    city: "Island Garden City of Samal",
    category: "Adventure",
    image: "images/monfort.jpg",
    description: "World's largest colony of fruit bats.",
    fullDesc: "Guinness World Record bat cave with 1.8 million bats.",
    activities: ["Bat viewing", "Cave tour", "Photography"],
    bestTime: "Dawn",
    fee: "₱60",
    hours: "5:00 AM – 5:00 PM",
    tips: "Arrive before sunrise."
  },
  {
    name: "Tibal-og River Adventure",
    city: "Santo Tomas",
    category: "Adventure",
    image: "images/tibal_og.jpg",
    description: "Scenic river adventure with calm waters and lush surroundings.",
    fullDesc: "Eco-tourism river experience ideal for kayaking and swimming.",
    activities: ["Kayaking", "River trekking", "Swimming", "Picnicking", "Photography"],
    bestTime: "November to May",
    fee: "₱50–₱200",
    hours: "6:00 AM – 5:00 PM",
    tips: "Go during dry season."
  },
  {
    name: "Zip-line at Cambanogoy",
    city: "Santo Tomas",
    category: "Adventure",
    image: "images/cliff.jpg",
    description: "Zip-line over highland coffee farms and valleys.",
    fullDesc: "Scenic aerial ride at 1,200m elevation.",
    activities: ["Zip-lining", "Rappelling", "Trekking"],
    bestTime: "October to April",
    fee: "₱200–₱400",
    hours: "8:00 AM – 5:00 PM",
    tips: "Wear closed shoes."
  },
  {
    name: "Mangrove Eco-Park",
    city: "Panabo City",
    category: "Adventure",
    image: "images/mangrove.jpg",
    description: "Eco-kayaking through mangrove forests.",
    fullDesc: "A major mangrove conservation and eco-tourism site.",
    activities: ["Kayaking", "Bird watching", "Education tours"],
    bestTime: "October to May",
    fee: "₱150",
    hours: "6:00 AM – 5:00 PM",
    tips: "Wear quick-dry clothes."
  }
];

function renderDestinations(data){
  const grid=document.getElementById('destGrid');
  const noRes=document.getElementById('noResults');
  grid.innerHTML='';
  if(!data.length){noRes.style.display='block';return;}
  noRes.style.display='none';
  data.forEach((d)=>{
    const idx=destinations.indexOf(d);
    const col=document.createElement('div');
    col.className='col-sm-6 col-lg-4';
    col.innerHTML=`<div class="dest-card h-100">
      <img src="${d.image}" alt="${d.name}" loading="lazy">
      <div class="dest-card-body">
        <span class="badge-cat">${d.category}</span>
        <h5>${d.name}</h5>
        <div class="dest-location"><i class="bi bi-geo-alt me-1"></i>${d.city}</div>
        <p class="dest-desc">${d.description}</p>
        <div class="dest-meta">
          ${d.fee?`<div><i class="bi bi-ticket-perforated me-1"></i>${d.fee}</div>`:''}
          ${d.hours?`<div><i class="bi bi-clock me-1"></i>${d.hours}</div>`:''}
        </div>
        <button class="btn-view" onclick="openModal(${idx})">View Details</button>
      </div></div>`;
    grid.appendChild(col);
  });
}

function openModal(i){
  const d=destinations[i];
  document.getElementById('modalTitle').textContent=d.name;
  document.getElementById('modalBody').innerHTML=`
    <img src="${d.image}" alt="${d.name}">
    <div class="modal-info-row">
      <span class="modal-badge"><i class="bi bi-geo-alt-fill"></i>${d.city}</span>
      <span class="modal-badge"><i class="bi bi-tag-fill"></i>${d.category}</span>
      ${d.fee?`<span class="modal-badge"><i class="bi bi-ticket-perforated-fill"></i>${d.fee}</span>`:''}
      ${d.hours?`<span class="modal-badge"><i class="bi bi-clock-fill"></i>${d.hours}</span>`:''}
    </div>
    <div class="modal-sec">About This Destination</div><p>${d.fullDesc}</p>
    <div class="modal-sec">Activities</div><ul>${d.activities.map(a=>`<li>${a}</li>`).join('')}</ul>
    <div class="modal-sec">Best Time to Visit</div><p>${d.bestTime}</p>
    <div class="modal-sec">Travel Tips</div><p>${d.tips}</p>`;
  new bootstrap.Modal(document.getElementById('destModal')).show();
}

let currentCat='All', currentSearch='';
function applyFilters(){
  let data=destinations;
  if(currentCat!=='All') data=data.filter(d=>d.category===currentCat);
  if(currentSearch){const q=currentSearch.toLowerCase();data=data.filter(d=>d.name.toLowerCase().includes(q)||d.city.toLowerCase().includes(q)||d.category.toLowerCase().includes(q));}
  renderDestinations(data);
}
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active'); currentCat=btn.dataset.cat; applyFilters();
  });
});
document.getElementById('searchInput').addEventListener('input',e=>{currentSearch=e.target.value;applyFilters();});

// URL param filter (for deep links like destinations.html?cat=Adventure)
const urlCat=new URLSearchParams(window.location.search).get('cat');
if(urlCat){
  currentCat=urlCat;
  document.querySelectorAll('.filter-btn').forEach(b=>{b.classList.remove('active');if(b.dataset.cat===urlCat)b.classList.add('active');});
}
renderDestinations(destinations.filter(d=>currentCat==='All'||d.category===currentCat));
const galleryImages=[
  {src:"images/samal.jpg",caption:"Samal Island — Garden City of Samal"},
  {src:"images/kaputian_beach.jpg",caption:"Kaputian Beach, Samal Island"},
  {src:"images/hagimit.jpg",caption:"Hagimit Falls, Samal Island"},
  {src:"images/monfort.jpg",caption:"Monfort Bat Cave — Guinness World Record"},
  {src:"images/hamiguitan.jpg",caption:"Mount Hamiguitan — UNESCO World Heritage Site"},
  {src:"images/pearl_farm.jpg",caption:"Pearl Farm Beach Resort, Samal Island"},
  {src:"images/banana_festival.jpg",caption:"Musa Festival, Panabo City"},
  {src:"images/musa_festival.jpg",caption:"Musa Festival Cultural Show"},
  {src:"images/mandaya.jpg",caption:"Mandaya Indigenous People"},
  {src:"images/matigsalug.jpg",caption:"Matigsalug Tribe"},
  {src:"images/bagobo.jpg",caption:"Bagobo Tribe Cultural Attire"},
  {src:"images/kalagan.jpg",caption:"Kalagan People"},
  {src:"images/talaingod.jpg",caption:"Talaingod Highlands"},
  {src:"images/cambanogoy.jpg",caption:"Cambanogoy Coffee Farms, Santo Tomas"},
  {src:"images/durian.jpg",caption:"Durian — King of Fruits"},
  {src:"images/tuna.jpg",caption:"Fresh Yellowfin Tuna Delicacy"},
  {src:"images/night_market.jpg",caption:"Tagum City Night Market"},
  {src:"images/davao_eco_park.jpg",caption:"Davao Eco Park"},
  {src:"images/malagos_garden.jpg",caption:"Malagos Garden Resort"},
  {src:"images/tourism_complex.jpg",caption:"Tagum City Tourism Complex"},
  {src:"images/talicud_island.jpg",caption:"Talicud Island, Samal"},
  {src:"images/vanishing.jpg",caption:"Vanishing Island, Samal"},
  {src:"images/banana_plantations.jpg",caption:"Banana Plantations, Panabo City"},
  {src:"images/mangrove.jpg",caption:"Mangrove Eco-Park, Panabo City"},
  {src:"images/indigenous_group.jpg",caption:"Indigenous Cultural Communities"},
  {src:"images/traditions.jpg",caption:"Cultural Traditions of Davao del Norte"},
  {src:"images/urayas_peak.jpg",caption:"Urayas Peak, Talaingod"},
  {src:"images/rice_fields.jpg",caption:"Rice Fields of Davao del Norte"},
  {src:"images/panabo_park.jpg",caption:"Panabo City Eco-Park"},
  {src:"images/tagum.jpg",caption:"Tagum City — Capital of Davao del Norte"},
  {src:"images/sanipaan.jpg",caption:"Sanipaan Falls, New Corella"},
  {src:"images/local_farms.jpg",caption:"Local Farms — Davao del Norte"},
  {src:"images/mainit.jpg",caption:"Mainit Hot Spring, Asuncion"},
  {src:"images/carmen_beach.jpg",caption:"Carmen Beach, Carmen"},
  {src:"images/sikwate_festival.jpg",caption:"Sikwate Festival, Kapalong"},
  {src:"images/lujon.jpg",caption:"Tasty Rice Cakes, Davao del Norte"},
  {src:"images/bula.jpg",caption:"Dessert Delight, Davao Region"}
];

function renderGallery(){
  const grid=document.getElementById('galleryGrid');
  galleryImages.forEach((img,i)=>{
    const item=document.createElement('div');
    item.className='gallery-item';
    item.innerHTML=`<img src="${img.src}" alt="${img.caption}" loading="lazy"><div class="gallery-overlay"><i class="bi bi-zoom-in"></i></div>`;
    item.addEventListener('click',()=>openLightbox(i));
    grid.appendChild(item);
  });
}

let lbIndex=0;
function openLightbox(i){lbIndex=i;updateLightbox();document.getElementById('lightbox').classList.add('active');}
function updateLightbox(){document.getElementById('lbImg').src=galleryImages[lbIndex].src;document.getElementById('lbCaption').textContent=galleryImages[lbIndex].caption;}
document.getElementById('lbClose').onclick=()=>document.getElementById('lightbox').classList.remove('active');
document.getElementById('lbPrev').onclick=()=>{lbIndex=(lbIndex-1+galleryImages.length)%galleryImages.length;updateLightbox();};
document.getElementById('lbNext').onclick=()=>{lbIndex=(lbIndex+1)%galleryImages.length;updateLightbox();};
document.getElementById('lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')document.getElementById('lightbox').classList.remove('active');});
document.addEventListener('keydown',e=>{
  if(!document.getElementById('lightbox').classList.contains('active'))return;
  if(e.key==='ArrowLeft'){lbIndex=(lbIndex-1+galleryImages.length)%galleryImages.length;updateLightbox();}
  if(e.key==='ArrowRight'){lbIndex=(lbIndex+1)%galleryImages.length;updateLightbox();}
  if(e.key==='Escape')document.getElementById('lightbox').classList.remove('active');
});

renderGallery();

document.getElementById('travelDate').min = new Date().toISOString().split('T')[0];

document.getElementById('inquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const fields = [
    {id:'fullName', check:v=>v.trim().length>0, msg:'Full name is required.'},
    {id:'emailAddr', check:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg:'Please enter a valid email address.'},
    {id:'contactNo', check:v=>/^[0-9+\s\-]{7,15}$/.test(v), msg:'Contact number must contain numbers only.'},
    {id:'selectedDest', check:v=>v!=='', msg:'Please select a destination.'},
    {id:'travelDate', check:v=>v.trim().length>0, msg:'Please select a travel date.'},
    {id:'numVisitors', check:v=>parseInt(v)>=1, msg:'Number of visitors must be at least 1.'},
    {id:'message', check:v=>v.trim().length>0, msg:'Message is required.'}
  ];
  fields.forEach(f => {
    const el = document.getElementById(f.id);
    const fb = el.nextElementSibling;
    if (!f.check(el.value)) {
      el.classList.add('is-invalid'); el.classList.remove('is-valid');
      if (fb && fb.classList.contains('invalid-feedback')) fb.textContent = f.msg;
      valid = false;
    } else {
      el.classList.remove('is-invalid'); el.classList.add('is-valid');
    }
  });
  if (valid) {
    document.getElementById('inquiryForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    window.scrollTo({top: document.getElementById('formSuccess').offsetTop - 100, behavior: 'smooth'});
  }
});
document.querySelectorAll('#inquiryForm .form-control, #inquiryForm .form-select').forEach(el => {
  el.addEventListener('input', () => el.classList.remove('is-invalid', 'is-valid'));
});
