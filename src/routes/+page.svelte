<script>
    import Box from "$lib/Box.svelte";
    import Clock from "$lib/Clock.svelte";
    import Editor from "$lib/Editor.svelte";
</script>

<div class="container">
    <Box>
        <h1>Welcome to SvelteKit</h1>
        <p>
            Visite <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
            documentation
        </p>
    </Box>

    <Box>
        <Editor />
    </Box>

    <div class="clock">
        <Clock /><Clock />
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        background-color: #cc1e1e;
        text-align: center;
    }

    .clock {
        display: flex;
        width: 50%;
    }
</style>
