import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const COLORS = {
  red: 0xE8192C,
  yellow: 0xFFD700,
  black: 0x111111,
  cream: 0xFFFBE6,
  metalGold: 0xD4A017,
  metalSilver: 0x8A9BAE,
}

function createStarShape(points: number, outerR: number, innerR: number): THREE.Shape {
  const shape = new THREE.Shape()
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR
    const a = (i * Math.PI) / points - Math.PI / 2
    if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r)
    else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r)
  }
  shape.closePath()
  return shape
}

function createLightningShape(): THREE.Shape {
  const s = new THREE.Shape()
  s.moveTo(0, 1.2)
  s.lineTo(-0.3, 0.3)
  s.lineTo(0.1, 0.35)
  s.lineTo(-0.15, -1.2)
  s.lineTo(0.3, -0.1)
  s.lineTo(-0.05, -0.05)
  s.lineTo(0.15, 1.2)
  s.closePath()
  return s
}

function createComicBookGeometry(): THREE.Group {
  const group = new THREE.Group()
  const cover = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 1.6, 0.08),
    new THREE.MeshStandardMaterial({ color: COLORS.red, roughness: 0.4, metalness: 0.1 })
  )
  const pages = new THREE.Mesh(
    new THREE.BoxGeometry(1.1, 1.5, 0.06),
    new THREE.MeshStandardMaterial({ color: COLORS.cream, roughness: 0.8 })
  )
  pages.position.z = -0.01
  group.add(cover, pages)
  return group
}

// ─── Detailed Superhero: Flying pose with cape ───
function createFlyingHero(): THREE.Group {
  const group = new THREE.Group()
  const bodyMat = new THREE.MeshStandardMaterial({ color: COLORS.red, roughness: 0.3, metalness: 0.6 })
  const capeMat = new THREE.MeshStandardMaterial({ color: COLORS.red, roughness: 0.5, metalness: 0.3, side: THREE.DoubleSide })
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xFFDBB5, roughness: 0.6, metalness: 0.0 })
  const bootMat = new THREE.MeshStandardMaterial({ color: COLORS.red, roughness: 0.2, metalness: 0.7 })

  // Torso
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.6, 8), bodyMat)
  torso.position.y = 0.3
  group.add(torso)

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), skinMat)
  head.position.y = 0.75
  group.add(head)

  // Left arm — extended forward
  const lArm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.04, 0.4, 6), bodyMat)
  lArm.position.set(-0.3, 0.45, 0.15)
  lArm.rotation.z = 0.8
  lArm.rotation.x = -0.3
  group.add(lArm)

  // Right arm — back
  const rArm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.04, 0.35, 6), bodyMat)
  rArm.position.set(0.25, 0.35, -0.15)
  rArm.rotation.z = -0.5
  rArm.rotation.x = 0.4
  group.add(rArm)

  // Left leg — trailing
  const lLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.45, 6), bootMat)
  lLeg.position.set(-0.1, -0.15, 0.05)
  lLeg.rotation.x = 0.6
  group.add(lLeg)

  // Right leg — trailing
  const rLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.45, 6), bootMat)
  rLeg.position.set(0.1, -0.15, -0.05)
  rLeg.rotation.x = 0.7
  group.add(rLeg)

  // Cape — flowing behind
  const capeShape = new THREE.Shape()
  capeShape.moveTo(0, 0)
  capeShape.bezierCurveTo(-0.3, -0.2, -0.5, -0.6, -0.4, -1.0)
  capeShape.bezierCurveTo(-0.3, -1.2, 0.1, -1.0, 0.2, -0.8)
  capeShape.bezierCurveTo(0.3, -0.5, 0.2, -0.2, 0, 0)
  const capeGeo = new THREE.ExtrudeGeometry(capeShape, { depth: 0.02, bevelEnabled: false })
  const cape = new THREE.Mesh(capeGeo, capeMat)
  cape.position.set(0, 0.55, -0.12)
  cape.rotation.x = 0.3
  group.add(cape)

  return group
}

// ─── Detailed Superhero: Standing hero with fist raised ───
function createStandingHero(): THREE.Group {
  const group = new THREE.Group()
  const bodyMat = new THREE.MeshStandardMaterial({ color: COLORS.black, roughness: 0.5, metalness: 0.2 })
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xFFDBB5, roughness: 0.6, metalness: 0.0 })
  const capeMat = new THREE.MeshStandardMaterial({ color: COLORS.black, roughness: 0.4, metalness: 0.15, side: THREE.DoubleSide })
  const emblemMat = new THREE.MeshStandardMaterial({ color: COLORS.yellow, roughness: 0.2, metalness: 0.8 })

  // Torso
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.55, 8), bodyMat)
  torso.position.y = 0.28
  group.add(torso)

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), skinMat)
  head.position.y = 0.7
  group.add(head)

  // Mask on head
  const mask = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), bodyMat)
  mask.position.y = 0.72
  group.add(mask)

  // Left arm — on hip
  const lArm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.35, 6), bodyMat)
  lArm.position.set(-0.28, 0.25, 0)
  lArm.rotation.z = 0.6
  group.add(lArm)

  // Right arm — fist raised
  const rArm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.4, 6), bodyMat)
  rArm.position.set(0.28, 0.55, 0)
  rArm.rotation.z = -0.2
  group.add(rArm)

  // Fist
  const fist = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), skinMat)
  fist.position.set(0.32, 0.78, 0)
  group.add(fist)

  // Left leg
  const lLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.45, 6), bodyMat)
  lLeg.position.set(-0.1, -0.22, 0)
  group.add(lLeg)

  // Right leg
  const rLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.45, 6), bodyMat)
  rLeg.position.set(0.1, -0.22, 0)
  group.add(rLeg)

  // Cape
  const capeShape = new THREE.Shape()
  capeShape.moveTo(-0.15, 0)
  capeShape.bezierCurveTo(-0.3, -0.3, -0.4, -0.7, -0.35, -1.1)
  capeShape.bezierCurveTo(-0.3, -1.3, 0.1, -1.2, 0.15, -1.0)
  capeShape.bezierCurveTo(0.2, -0.7, 0.15, -0.3, 0.15, 0)
  const capeGeo = new THREE.ExtrudeGeometry(capeShape, { depth: 0.02, bevelEnabled: false })
  const cape = new THREE.Mesh(capeGeo, capeMat)
  cape.position.set(0, 0.5, -0.12)
  group.add(cape)

  // Chest emblem — diamond
  const emblem = new THREE.Mesh(
    new THREE.ExtrudeGeometry(createStarShape(4, 0.08, 0.03), { depth: 0.02, bevelEnabled: false }),
    emblemMat
  )
  emblem.position.set(0, 0.35, 0.22)
  emblem.rotation.z = Math.PI / 4
  group.add(emblem)

  return group
}

// ─── Shield with concentric rings ───
function createShield(): THREE.Group {
  const group = new THREE.Group()
  const ring1 = new THREE.Mesh(
    new THREE.RingGeometry(0.5, 0.6, 32),
    new THREE.MeshStandardMaterial({ color: COLORS.red, roughness: 0.3, metalness: 0.7, side: THREE.DoubleSide })
  )
  group.add(ring1)

  const ring2 = new THREE.Mesh(
    new THREE.RingGeometry(0.35, 0.5, 32),
    new THREE.MeshStandardMaterial({ color: COLORS.cream, roughness: 0.4, metalness: 0.3, side: THREE.DoubleSide })
  )
  ring2.position.z = 0.01
  group.add(ring2)

  const ring3 = new THREE.Mesh(
    new THREE.RingGeometry(0.2, 0.35, 32),
    new THREE.MeshStandardMaterial({ color: COLORS.red, roughness: 0.3, metalness: 0.7, side: THREE.DoubleSide })
  )
  ring3.position.z = 0.02
  group.add(ring3)

  const center = new THREE.Mesh(
    new THREE.ExtrudeGeometry(createStarShape(5, 0.18, 0.08), { depth: 0.03, bevelEnabled: true, bevelThickness: 0.005, bevelSize: 0.005, bevelSegments: 1 }),
    new THREE.MeshStandardMaterial({ color: COLORS.yellow, roughness: 0.2, metalness: 0.85 })
  )
  center.position.z = 0.03
  group.add(center)

  return group
}

function createPlanet(): THREE.Group {
  const group = new THREE.Group()

  // Planet body
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4A90D9, roughness: 0.4, metalness: 0.3 })
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), bodyMat)
  group.add(body)

  // Surface band (equator stripe)
  const bandMat = new THREE.MeshStandardMaterial({ color: 0xD4A017, roughness: 0.5, metalness: 0.2 })
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.06, 8, 32), bandMat)
  band.rotation.x = Math.PI / 2
  group.add(band)

  // Ring
  const ringMat = new THREE.MeshStandardMaterial({ color: 0xFFD700, roughness: 0.3, metalness: 0.6, side: THREE.DoubleSide })
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.65, 0.9, 32), ringMat)
  ring.rotation.x = Math.PI / 2.5
  group.add(ring)

  // Inner ring
  const ring2Mat = new THREE.MeshStandardMaterial({ color: 0xE8192C, roughness: 0.4, metalness: 0.4, side: THREE.DoubleSide })
  const ring2 = new THREE.Mesh(new THREE.RingGeometry(0.92, 1.05, 32), ring2Mat)
  ring2.rotation.x = Math.PI / 2.5
  group.add(ring2)

  return group
}

interface ObjectDef {
  create: () => THREE.Object3D
  pos: [number, number, number]
  scale: number
  rotSpeed: [number, number, number]
  bobSpeed: number
  bobAmp: number
}

const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    objects: THREE.Object3D[]
    raf: number
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const w = window.innerWidth
    const h = window.innerHeight

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.set(0, 0, 14)

    // Environment map
    const pmrem = new THREE.PMREMGenerator(renderer)
    pmrem.compileEquirectangularShader()
    const envScene = new THREE.Scene()
    envScene.add(new THREE.Mesh(
      new THREE.SphereGeometry(50, 32, 32),
      new THREE.MeshBasicMaterial({ side: THREE.BackSide, color: 0x1a1a2e })
    ))
    ;[
      { color: 0xE8192C, pos: [10, 5, -20] as [number, number, number] },
      { color: 0xFFD700, pos: [-10, -5, -18] as [number, number, number] },
    ].forEach(e => {
      const s = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 8), new THREE.MeshBasicMaterial({ color: e.color }))
      s.position.set(...e.pos)
      envScene.add(s)
    })
    const envMap = pmrem.fromScene(envScene, 0.04).texture
    scene.environment = envMap

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const key = new THREE.DirectionalLight(0xffffff, 1.8)
    key.position.set(5, 8, 10)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0xE8192C, 0.6)
    fill.position.set(-6, 3, 5)
    scene.add(fill)
    const rim = new THREE.DirectionalLight(0xFFD700, 0.5)
    rim.position.set(0, -5, 8)
    scene.add(rim)
    const point = new THREE.PointLight(0xFFD700, 0.8, 20)
    point.position.set(3, 4, 6)
    scene.add(point)

    // Materials
    const matGold = new THREE.MeshStandardMaterial({ color: COLORS.metalGold, roughness: 0.15, metalness: 0.9, envMap })
    const matYellow = new THREE.MeshStandardMaterial({ color: COLORS.yellow, roughness: 0.2, metalness: 0.8, envMap })

    // Geometries
    const starGeo = new THREE.ExtrudeGeometry(createStarShape(5, 0.5, 0.22), { depth: 0.2, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2 })
    const boltGeo = new THREE.ExtrudeGeometry(createLightningShape(), { depth: 0.15, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2 })
    const torusGeo = new THREE.TorusKnotGeometry(0.35, 0.1, 64, 16, 2, 3)

    const defs: ObjectDef[] = [
      // 1. Flying hero
      { create: () => createFlyingHero(), pos: [-5, 1, -3], scale: 0.7, rotSpeed: [0.001, 0.002, 0.001], bobSpeed: 0.25, bobAmp: 0.35 },
      // 2. Standing hero
      { create: () => createStandingHero(), pos: [5.5, -0.5, -3.5], scale: 0.65, rotSpeed: [-0.001, 0.002, -0.001], bobSpeed: 0.2, bobAmp: 0.2 },
      // 3. Shield
      { create: () => createShield(), pos: [3.5, 3, -4], scale: 0.55, rotSpeed: [0.002, 0.003, 0.001], bobSpeed: 0.3, bobAmp: 0.18 },
      // 4. Comic book
      { create: () => createComicBookGeometry(), pos: [-2, -3, -4], scale: 0.55, rotSpeed: [0.001, 0.002, -0.001], bobSpeed: 0.25, bobAmp: 0.12 },
      // 5. Star — gold
      { create: () => new THREE.Mesh(starGeo, matGold), pos: [6, 3.5, -3], scale: 0.45, rotSpeed: [0.002, 0.004, 0.002], bobSpeed: 0.35, bobAmp: 0.2 },
      // 6. Lightning — yellow
      { create: () => new THREE.Mesh(boltGeo, matYellow), pos: [-6, 3, -3.5], scale: 0.7, rotSpeed: [0.002, 0.001, -0.003], bobSpeed: 0.4, bobAmp: 0.25 },
      // 7. Torus knot — gold
      { create: () => new THREE.Mesh(torusGeo, matGold), pos: [5, -3, -4], scale: 0.5, rotSpeed: [0.003, 0.002, 0.001], bobSpeed: 0.3, bobAmp: 0.15 },
      // 8. Planet with rings
      { create: () => createPlanet(), pos: [-4, 3.5, -3.5], scale: 1.1, rotSpeed: [0.001, 0.003, 0.0005], bobSpeed: 0.2, bobAmp: 0.22 },
    ]

    const objects: THREE.Object3D[] = []
    defs.forEach(d => {
      const obj = d.create()
      obj.position.set(...d.pos)
      obj.scale.setScalar(d.scale)
      obj.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2)
      scene.add(obj)
      objects.push(obj)
    })

    const clock = new THREE.Clock()
    const baseY = objects.map(o => o.position.y)
    const baseX = objects.map(o => o.position.x)

    let mouseX = 0, mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4
    }
    window.addEventListener('mousemove', onMouseMove)

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    const animate = () => {
      const t = clock.getElapsedTime()
      objects.forEach((obj, i) => {
        const d = defs[i]
        obj.rotation.x += d.rotSpeed[0]
        obj.rotation.y += d.rotSpeed[1]
        obj.rotation.z += d.rotSpeed[2]
        obj.position.y = baseY[i] + Math.sin(t * d.bobSpeed + i) * d.bobAmp
        obj.position.x = baseX[i] + Math.cos(t * d.bobSpeed * 0.7 + i * 0.5) * d.bobAmp * 0.3
      })
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.015
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.015
      camera.lookAt(0, 0, 0)
      point.position.x = Math.sin(t * 0.3) * 5
      point.position.y = Math.cos(t * 0.4) * 3
      renderer.render(scene, camera)
      sceneRef.current!.raf = requestAnimationFrame(animate)
    }

    sceneRef.current = { renderer, scene, camera, objects, raf: requestAnimationFrame(animate) }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.raf)
      }
      pmrem.dispose()
      renderer.dispose()
      envMap.dispose()
      objects.forEach(o => {
        const traverse = (obj: THREE.Object3D) => {
          if (obj instanceof THREE.Mesh) {
            obj.geometry.dispose()
            if (Array.isArray(obj.material)) obj.material.forEach(mt => mt.dispose())
            else obj.material.dispose()
          }
          obj.children.forEach(traverse)
        }
        traverse(o)
      })
      sceneRef.current = null
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}

export default React.memo(ThreeBackground)
