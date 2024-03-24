import { LitElement, html, css } from "lit"
import "./LitIcon.js"

export class Social extends LitElement {
	static get styles() {
		return css`
		.Social {
			margin: 0;
			padding: 0;
			list-style-type: none;
			display: flex;
			gap: 1rem;
		}
		.Social-Item {
			align-self: center;
		}
		.Social-Link {
			display: flex;
			gap: 0.5ch;
			align-items: center;
			font-family: var(--Font_family_accent);
			color: var(--color-dark-gray-2);
			text-decoration: none;
		}
		.Social-Link:hover {
			color: var(--color-brand);
		}
		.Social-Link:active {
			opacity: 0.3;
		}
		`
	}

	static get properties() {
		return {
			socialLinks: { type: Array },
		}
	}

	constructor() {
		super()
		this.socialLinks = []
	}

	render() {
		return html`
		<ul class="Social">
			${this.socialLinks.map((item) => html`
				<li class="Social-Item">
					<a
						class="Social-Link Social-Link_icon_${item.name.toLowerCase()}"
						href="${item.url}"
					>
						<lit-icon class="${item.name.toLowerCase()}"></lit-icon>
						<span>${item.name}</span>
					</a>
				</li>
			`)}
		</ul>`
	}
}

customElements.define(`social-links`, Social)
