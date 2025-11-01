<script>
  const { id, title, origin } = $props()
  import { actions } from 'astro:actions'
  import DeleteIcon from '../icons/delete.svelte'
  import EditIcon from '../icons/edit.svelte'

  let imgSrc = `https://v1.screenshot.11ty.dev/${encodeURIComponent(origin + "/bin/" + id)}/opengraph/`
  let aHref = origin + "/bin/" + id

  const deleteBin = async (id) => {
    try {
      const { data } = await actions.deleteBin({ id })
    } catch (err) {
      console.log(err)
    }
  }
</script>

<article>
      <header>
        <strong>
          {title}
        </strong>
      </header>
      <a href={aHref} class="contrast">
        <img
          src={imgSrc}
          alt=""
        />
      </a>
    <footer>
      <div class="actions">
        <button>
          <EditIcon />
        </button>
        <button onclick={() => deleteBin(id)} >
          <DeleteIcon />
        </button>
      </div>
    </footer>
</article>

<style lang="scss">
  a {
    text-decoration: none;
  }
  article {
    footer {
      display: flex;
      justify-content: end;
      align-items: center;

      button {
        padding: 10px;
      }
    }
  }
</style>