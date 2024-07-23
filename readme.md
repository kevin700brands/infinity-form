# Autoplay Video for Modern Browsers

## Example Installation

1. Import the files

#### insert inside <head></head>

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kevin700brands/infinity-form/style.css" />
```

#### before </body>

```
<script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://cdn.jsdelivr.net/gh/kevin700brands/infinity-form/index.js"></script>
```

2. HTML

```
<!-- Infinity Song Form -->
	<div class="infinity__form--container"></div>
	<!-- End Infinity Song Form -->
```

3. Instantiate

```
    infinityForm({
			endpoint: "https://script.google.com/macros/s/AKfycbwJAL1r4lMlu6-Z_jI_KtiwbS3HnJhJ7W6u8XdMRrBwq6JMIeOgnhf2jn1djIJRGoz9kQ/exec"
		})
```
