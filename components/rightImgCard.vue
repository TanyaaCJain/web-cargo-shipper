<template>
    <div class="right-img-card" :id="id">
        <div class="content">
            <div class="title">
                <h3> {{ title }} </h3>
            </div>
            <div class="paragraph">
                <p> {{ paragraph }} </p>
            </div>
            <a :href="contentLink" class="content-link">
                {{ contentLinkText }}
            </a>
        </div>
        <div class="content-image">
            <img :src="imgSrc" :alt="imgAlt" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        paragraph: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String,
            required: true
        },
        contentLink: {
            type: String,
            required: true
        },
        contentLinkText: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.right-img-card {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
        "content content-image";
    border-radius: 24px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    .content {
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-areas:
            "title"
            "paragraph"
            "content-link";
        grid-gap: 1rem;
        padding: 30px;

        justify-content: center;
        .title {
            grid-area: title;
        }
        .description {
            grid-area: paragraph;
        }
        .content-link {
            grid-area: content-link;
            justify-self: center;
        }
    }
    .content-image {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0 24px 24px 0;
        }
    }
}
</style>