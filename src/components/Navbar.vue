<template>
	<header class="position-fixed" :class="{ 'w-100 h-100': mobileExpanded }">
		<b-navbar-toggle :aria-expanded="showCollapse" @click="showCollapse = !showCollapse" class="d-md-none nav-item" target="navbar-collapse">
			<font-awesome-icon class="transition-fast" icon="bars"></font-awesome-icon>
		</b-navbar-toggle>

		<b-navbar :class="{ '': wXS || wSM }" class="d-flex transition-fast pb-2" ref="navbar" toggleable="md">
			<b-collapse id="navbar-collapse" is-nav v-model="showCollapse">
				<b-row class="flex-fill flex-column flex-md-row" no-gutters>
					<transition name="fade-scale">
						<b-col :class="{ 'd-flex align-items-center': slided }" v-show="slided" class="mx-auto" cols="8" md="2" xl="1">
							<b-navbar-brand class="d-flex mx-auto mr-md-3" href="#">
								<img :class="{ 'w-75': !wXL }" alt="logo" class="img-fluid mx-auto" src="@/assets/images/logo_white.png" />
							</b-navbar-brand>
						</b-col>
					</transition>
					<b-col class="d-flex mx-auto" cols="12" md="10" xl="11">
						<b-navbar-nav align="between" class="flex-fill align-items-center d-flex flex-column flex-md-row" fill>
							<b-nav-item :class="{ light: slided }" :key="index" @click="scrollTo(link)" class="text-center font-weight-bold" href="#" v-for="(link, index) in links">
								<small class="transition-fast font-weight-bold second-font">{{ link.name }}</small>
							</b-nav-item>
						</b-navbar-nav>
					</b-col>
				</b-row>
			</b-collapse>
		</b-navbar>
	</header>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			showCollapse: false,
			scrollY: 0,
			mainHeight: 0,
			clientHeight: 0,
			links: [
				{
					name: "start",
					href: "main",
					page: "/"
				},
				{
					name: "o nas",
					href: "about-us",
					page: "/"
				},
				{
					name: "blog",
					href: "articles",
					page: "/"
				},
				{
					name: "znajdź nas",
					href: "place",
					page: "/"
				},
				{
					name: "kontakt",
					href: "contact"
				}
			]
		};
	},
	mounted() {
		window.addEventListener("scroll", () => {
			this.scrollY = window.scrollY;
		});
		window.addEventListener("resize", () => {
			this.mainHeight = window.innerHeight;
			this.clientHeight = this.$refs.navbar ? this.$refs.navbar.clientHeight : this.clientHeight;
		});
		let event = new Event("resize");
		window.dispatchEvent(event);
		event = new Event("scroll");
		window.dispatchEvent(event);
	},
	methods: {
		scrollTo(link) {
			if ("page" in link && link.page !== this.$route.fullPath) {
				this.$router.push({ path: link.page });
			}
			this.$scrollTo(`#${link.href}`, 700);
		}
	},
	computed: {
		slided() {
			return this.scrollY > this.mainHeight - (this.wXS || this.wSM ? 0 : this.clientHeight);
		},
		expanded() {
			return this.showCollapse || this.wMD || this.wLG || this.wXL;
		},
		mobileExpanded() {
			return this.expanded && (this.wXS || this.wSM);
		}
	},
	watch: {
		showCollapse() {
			document.querySelector("body").style.overflow = this.mobileExpanded ? "hidden" : "auto";
		}
	}
};
</script>

<style lang="scss" scoped>
header.position-fixed {
	z-index: $navbar-index;
	pointer-events: none;
}

.h-0 {
	height: 0 !important;
}

.darken-background {
	background: transparentize($black, 0.4);
}

.nav-item {
	&,
	& * {
		color: $gray-500;
		pointer-events: initial;
	}

	&:hover * {
		color: lighten($gray-500, 15%);
	}

	&.light {
		&,
		& * {
			color: $gray-300;
		}

		&:hover * {
			color: lighten($gray-300, 15%);
		}
	}
}
</style>
