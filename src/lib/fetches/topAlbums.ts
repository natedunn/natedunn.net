const key = import.meta.env.LASTFM_API_KEY;

export const topAlbums = async () =>
  await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=natedunn_&api_key=${key}&format=json`
  )
    .then((res) => res.json())
    .then((res) => {
      const album = res.weeklyalbumchart.album as {
        artist: {
          '#text': string;
        };
        mbid: string;
        name: string;
      }[];
      return album.filter((_, i) => i < 4);
    })
    .then(async (albums) => {
      return Promise.all(
        albums.map(async (album) => {
          const data = await fetch(
            `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${key}&mbid=${album.mbid}&format=json`
          )
            .then((res) => res.json())
            .then((res) => {
              return {
                artist: res.album.artist,
                name: res.album.name,
                image: res.album.image[3]['#text'],
              };
            });
          return data;
        })
      );
    });
