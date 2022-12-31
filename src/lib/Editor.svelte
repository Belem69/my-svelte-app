<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark";
    let value = "";
    let counter = 0;
    setInterval( ()=> counter++, 1000);
</script>

<div class='title'>💫CM6🚀 {counter}s</div>
<CodeMirror
    bind:value
    lang={javascript()}
    theme={oneDark}
    styles={{
        "&": {
            width: "100%",
            maxWidth: "100%",
            height: "10rem",
            border: "dashed 2px salmon",
            borderRadius: "10px",
            overflow: "hidden"
        },
    }}
/>

<style>
    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-align: center;
    }
</style>