<template>
  <div class="pago-sucursal">
    <!-- NAV -->
    <header class="top-nav">
      <img src="@/assets/img/logo_digitbus_color.svg" alt="DigitBus" class="logo" />
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Conócenos</a>
        <a href="#">Iniciar sesión</a>
      </nav>
    </header>

    <!-- CONTENIDO PRINCIPAL -->
    <main class="contenido">
      <h1>Elige tu <strong>método de pago</strong> en sucursal</h1>

      <section class="seccion-central">
        <!-- TARJETA -->
        <div class="tarjeta box">
          <h2>Tarjeta</h2>
          <p>Selecciona el método de pago</p>
          <div class="btn-group">
            <button class="btn-dark active">Débito</button>
            <button class="btn-dark">Crédito</button>
          </div>

          <label>Nombre del propietario</label>
          <input type="text" placeholder="José Carlos Camarena Hernández" />

          <label>Número de tarjeta</label>
          <input type="text" placeholder="**** **** **** ****" />

          <div class="input-flex">
            <div>
              <label>Expiración</label>
              <input type="text" placeholder="MM/AA" />
            </div>
            <div>
              <label>CVV</label>
              <input type="text" placeholder="000" />
            </div>
          </div>

          <button class="btn-pagar">Pagar</button>
          <p class="nota">Usamos tus datos de forma responsable y privada.</p>
        </div>

        <!-- TRANSFERENCIA -->
        <div class="transferencia box">
          <h2>Transferencia</h2>
          <p><strong>Detalles para la <span class="azul">transferencia</span></strong></p>
          <p>Realiza tu transferencia a:</p>
          <p><strong>Banco:</strong> Asumaquina</p>
          <p><strong>Cuenta:</strong> 1234567890</p>
          <p><strong>CLABE:</strong> 012345678901234567</p>
        </div>

        <!-- EXTRA DERECHA -->
        <div class="extra">
          <img src="@/assets/img/promo-indrive.jpg" alt="Publicidad inDrive" class="banner" />
          <div class="guia">
            <h3>Guía <span class="azul">rápida</span></h3>
            <ol>
              <li><strong>Selecciona</strong> el medio de pago.</li>
              <li><strong>Ingresa los datos</strong> requeridos.</li>
              <li><strong>Pulsa</strong> el botón pagar.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Este componente es puramente visual por ahora.
</script>

<style scoped>
:root {
  --verde: #51c638;
  --azul: #1a6dff;
  --azul-marino: #2a3547;
  --blanco: #ffffff;
}

.pago-sucursal {
  background-color: #f7f9fc;
  min-height: 100vh;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--blanco);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.logo {
  height: 32px;
}

.top-nav nav a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: var(--azul);
  font-weight: 500;
}

.contenido {
  padding: 2rem;
  max-width: 1300px;
  margin: auto;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--azul-marino);
}

.seccion-central {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.box {
  background-color: var(--azul);
  color: var(--blanco);
  padding: 1.5rem;
  border-radius: 12px;
  flex: 1;
  min-width: 280px;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.input-flex {
  display: flex;
  gap: 1rem;
}

.btn-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.btn-dark {
  flex: 1;
  padding: 0.5rem;
  background: var(--azul-marino);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-dark.active {
  background-color: var(--verde);
}

.btn-pagar {
  background-color: var(--verde);
  color: white;
  width: 100%;
  padding: 0.75rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
}

.nota {
  font-size: 0.75rem;
  margin-top: 0.5rem;
}

.extra {
  flex: 1;
  min-width: 280px;
}

.banner {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.guia {
  background-color: var(--azul-marino);
  color: var(--blanco);
  padding: 1rem;
  border-radius: 12px;
}

.guia h3 {
  margin-bottom: 1rem;
}

.guia ol {
  padding-left: 1rem;
}

.guia li {
  margin-bottom: 0.5rem;
}

.azul {
  color: var(--blanco);
}
</style>
