<script lang='ts'>
  import { type RESTPostAPIChannelMessageResult } from 'discord-api-types/v10';
  import { onMount } from 'svelte';
  import Machintosh from '$lib/components/Machintosh.svelte';

  let discordData: RESTPostAPIChannelMessageResult[] = [];

  async function fetchMessages() {
    try {
        const response = await fetch('/api/fetchMessages/1205238108271022161');
        if (!response.ok) {
            throw new Error('Failed to fetch messages from Discord');
        }
        const data = await response.json();
        discordData = data.messages;
    } catch (error) {
        console.error(error);
    }
  }
  
  onMount(fetchMessages);
</script>

{#if discordData.length > 0}
  <ul>
    {#each discordData as message}
      <li>{message.content}</li>
    {/each}
  </ul>
{:else}
  <p>No messages found</p>
{/if}

<Machintosh />
  
