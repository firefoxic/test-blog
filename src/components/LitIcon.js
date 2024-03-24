import { LitElement, html, css } from "lit"

export class LitIcon extends LitElement {
	static get styles() {
		return css`
		:host {
			display: block;
			inline-size: 48px;
			aspect-ratio: 1;
			border-radius: 50%;
			background-color: currentColor;
			mask: var(--icon-url) no-repeat center / contain;
		}

		:host(.github) {
			--icon-url: var(--Icon_shape_github);
		}

		:host(.mastodon) {
			--icon-url: var(--Icon_shape_mastodon);
		}

		:host(.telegram) {
			--icon-url: var(--Icon_shape_telegram);
		}
		`
	}

	static get properties() {
		return {
			iconName: { type: String },
		}
	}

	constructor() {
		super()
		this.iconName = ``
	}

	render() {
		return html``
	}
}

customElements.define(`lit-icon`, LitIcon)
