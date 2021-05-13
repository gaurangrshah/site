import { getUserPlaylist } from "@/lib/spotify";

export default async (_, res) => {
  const listIds = [
    "5JRzQdOGC7AouQr31Lz9LN", // focus
    "415JbSM7IOTX1RorhYcU3l", // moksha
    "3xmi8BAy9wYVcBf9GB7ujz", // 8climate
    "6wBbstnxCmNlWNhlO8r4Pf", // house
    "1x14yxvHCobdxCkt8EVxxF", // techno
    "2qGVdsC03HDgF6lRjdkWeN", // tech house
    "0nW6OiVqcto6CasTSRS9A2", // soul
    "2csCWBs7qxKTSBkMSLd3xA", // progressive
  ]; // moksha, 8climate, house, techno, tech house, soul, progressive, focus

  const playlists = await Promise.all(
    await listIds.map(async (id) => {
      const response = await getUserPlaylist(id);
      return await response.json();
    })
  );

  return res.json({ count: playlists?.length, data: playlists });
};
