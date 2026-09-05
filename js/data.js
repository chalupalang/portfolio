/* =============================================================
   PHOTO + VIDEO DATA
   -------------------------------------------------------------
   This is the file you'll edit the most. You do NOT need to
   touch any HTML to add, remove, or reorder photos and videos —
   just edit the lists below.

   Each photo needs:
     file     -> the filename inside images/photos/
     category -> must exactly match one of the names in CATEGORIES
                 below (copy-paste it to avoid typos)
     featured -> true/false — true shows it on the homepage grid

   Every photo currently says category: "People" as a placeholder —
   go through and change each one to whichever of the four
   categories actually fits that photo.

   No captions/descriptions to write — just filename + category.
   (The image still gets a generic "Photograph by Kaylah Lang" alt
   text automatically, for accessibility and search engines — you
   don't need to do anything for that.)

   Note on sizing: the grid automatically keeps each photo's real
   aspect ratio (portrait photos stay tall, landscape photos stay
   wide) — you don't set a size, it just works based on the image
   itself.
================================================================= */

// The four filter categories, in the order the buttons should
// appear on the gallery page. Rename these any time — whatever's
// in this list is what shows up as filter buttons.
const CATEGORIES = ["People", "Events & Movement", "Places", "Nature & Wildlife"];

const PHOTOS = [
  { file: "photo-01.jpg", category: "Places", featured: true },
  { file: "photo-02.jpg", category: "Places", featured: false },
  { file: "photo-03.jpg", category: "Places", featured: false },
  { file: "photo-04.jpg", category: "Places", featured: false },
  { file: "photo-05.jpg", category: "Places", featured: false },
  { file: "photo-06.jpg", category: "Places", featured: false },
  { file: "photo-07.jpg", category: "Places", featured: false },
  { file: "photo-08.jpg", category: "Places", featured: false },
  { file: "photo-09.jpg", category: "Places", featured: true },
  { file: "photo-10.jpg", category: "Places", featured: false },
  { file: "photo-11.jpg", category: "Places", featured: false },
  { file: "photo-12.jpg", category: "Events & Movement", featured: false },
  { file: "photo-13.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-14.jpg", category: "People", featured: false },
  { file: "photo-15.jpg", category: "People", featured: false },
  { file: "photo-16.jpg", category: "People", featured: false },
  { file: "photo-17.jpg", category: "People", featured: false },
  { file: "photo-18.jpg", category: "People", featured: false },
  { file: "photo-19.jpg", category: "Events & Movement", featured: false },
  { file: "photo-20.jpg", category: "Events & Movement", featured: false },
  { file: "photo-21.jpg", category: "Events & Movement", featured: false },
  { file: "photo-22.jpg", category: "Events & Movement", featured: false },
  { file: "photo-23.jpg", category: "People", featured: false },
  { file: "photo-24.jpg", category: "People", featured: false },
  { file: "photo-25.jpg", category: "People", featured: false },
  { file: "photo-26.jpg", category: "People", featured: false },
  { file: "photo-27.jpg", category: "People", featured: false },
  { file: "photo-28.jpg", category: "People", featured: false },
  { file: "photo-29.jpg", category: "People", featured: false },
  { file: "photo-30.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-31.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-32.jpg", category: "Nature & Wildlife", featured: true },
  { file: "photo-33.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-34.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-35.jpg", category: "Nature & Wildlife", featured: true },
  { file: "photo-36.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-37.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-38.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-39.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-40.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-41.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-42.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-43.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-44.jpg", category: "Nature & Wildlife", featured: false },
  { file: "photo-45.jpg", category: "People", featured: false },
  { file: "photo-46.jpg", category: "People", featured: false },
  { file: "photo-47.jpg", category: "People", featured: false },
  { file: "photo-48.jpg", category: "Events & Movement", featured: false },
  { file: "photo-49.jpg", category: "Events & Movement", featured: false },
  { file: "photo-50.jpg", category: "Events & Movement", featured: false },
  { file: "photo-51.jpg", category: "Events & Movement", featured: false },
  { file: "photo-52.jpg", category: "Events & Movement", featured: false },
  { file: "photo-53.jpg", category: "Events & Movement", featured: false },
  { file: "photo-54.jpg", category: "Events & Movement", featured: false },
  { file: "photo-55.jpg", category: "Events & Movement", featured: false },
  { file: "photo-56.jpg", category: "Events & Movement", featured: false },
  { file: "photo-57.jpg", category: "Events & Movement", featured: false },
  { file: "photo-58.jpg", category: "Events & Movement", featured: false },
];


/* =============================================================
   VIDEOS
   -------------------------------------------------------------
   Each video needs:
     title    -> shown under the thumbnail
     desc     -> one short line about the project
     poster   -> a still image inside images/video-posters/
     type     -> "youtube", "vimeo", or "file"
     source   -> for youtube/vimeo, the video ID (the part of the
                 URL after v= or vimeo.com/). For "file", the path
                 to a video file inside images/ (see README — only
                 do this for short clips, it uses a lot of
                 Netlify's free bandwidth).
================================================================= */

const VIDEOS = [
  {
    title: "REDRED - CORTIS | Dance Film Cover",
    desc: "This was a dance film cover project, with members of the UTK K-Pop Dance Association. I helped create a visual storyboard, as well as filmed and edited the video.",
    poster: "video-01.jpg",
    type: "youtube",
    source: "tCKVbe2n5rI",
      orientation: "landscape",
  },
  {
    title: "Buddhist Temple, Guilin, China",
    desc: "This collection of short clips was filmed on a Canon Rebel T7 with a 75-300mm Lens. I filmed this in a Buddhist temple in the mountains, in Guilin, China.",
    poster: "video-02.jpg",
    type: "youtube",
    source: "6EaQGuU6w5E",
    orientation: "landscape",
  },
  {
    title: "Chongqing, China",
    desc: "This is the Twin River Bridges in Chongqing, China, filmed on a Canon Rebel T7 with a 75-300mm Lens.",
    poster: "video-03.jpg",
    type: "youtube",
    source: "uBVfZ3eaGzI",
    orientation: "landscape",
  },
  {
    title: "Seven Islands State Birding Park",
    desc: "This is a short videography project showcasing the beauty of the Seven Islands State Birding Park, filmed on a Canon Rebel T7 with a 75-300mm Lens.",
    poster: "video-04.jpg",
    type: "youtube",
    source: "V9np7zi8Cbk",
    orientation: "landscape",
  },
  {
    title: "Humanities and Social Sciences Building, UTK",
    desc: "Filmed on an iPhone 14, this was the flower tree outside the Humanities and Social Sciences building at UTK, in the spring.",
    poster: "video-05.jpg",
    type: "youtube",
    source: "0vKgGwd7pFU",
    orientation: "landscape",
  },
];
