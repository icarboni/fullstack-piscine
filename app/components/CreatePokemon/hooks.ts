'use server';

export async function generatePokemon(prompt: string) : Promise<string> {
    const apiKey = process.env.LIMEWIRE_API_KEY;
    console.log(apiKey);
    const resp = await fetch(
        `https://api.limewire.com/api/image/generation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Version": "v1",
            Accept: "application/json",
            Authorization:
              "Bearer " + apiKey,
          },
          body: JSON.stringify({
            prompt: prompt,
            aspect_ratio: "1:1",
          }),
        }
      );

      const data = await resp.json();
      if (data.status !== 200) {
        throw new Error(data.detail);
        return "";
      }
      console.log(data);
      return (data.data.asset_url);
}