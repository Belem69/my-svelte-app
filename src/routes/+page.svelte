<script>
    import Box from "$lib/Box.svelte";
    import Clock from "$lib/Clock.svelte";
    import Editor from "$lib/Editor.svelte";
    import ContactCard from "$lib/ContactCard.svelte";

    import neural from "$lib/images/earth640.png";

    let counter = 0;
    setInterval(() => (counter += 1), 1000); 
</script>

<div class="container">
    <Box>
        <h1>Welcome to SvelteKit</h1>
        <p>
            {counter}
        </p>
    </Box>

    <img class="neural-image" width="100px" src={neural} alt="SvelteKit logo" />

    <Box>
        <Editor />
    </Box>

    <div class="clock">
        <Clock />
    </div>

    <ContactCard>
        <span slot="name">Popeye</span>
        <span slot="address">
            29 rue Wallaby Way<br />
            Sydney
        </span>
        <span slot="email">toto@proton.me</span>
    </ContactCard>
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

    p {
        text-align: center;
    }

    .clock {
        display: flex;
        width: 50%;
    }

    /* neural image rotation */
    .neural-image {
        margin: 20px;
        animation: rotation 69s infinite linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
    /* end neural image rotation */
</style>
