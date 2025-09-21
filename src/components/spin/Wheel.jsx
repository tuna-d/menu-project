import Konva from "konva"
import { Stage, Layer, Wedge, Group, Circle, Text } from "react-konva"
import { useRef, useEffect, useState } from "react"

Konva.angleDeg = false

export default function Wheel({ selectedItems, selectLuckyItem }) {
  const [counter, setCounter] = useState(0)
  const [luckyItem, setLuckyItem] = useState("")

  const addWedges = (wedgeNo, totalWedge, text) => {
    const wedgeAngle = (2 * Math.PI) / totalWedge
    const wedgeRotation = wedgeNo * wedgeAngle
    const radius = 140

    const textRadius = radius * 0.6
    const textAngle = wedgeRotation + wedgeAngle / 2

    const textX = textRadius * Math.cos(textAngle)
    const textY = textRadius * Math.sin(textAngle)

    return (
      <Group key={wedgeNo}>
        <Wedge
          key={wedgeNo}
          radius={radius}
          angle={wedgeAngle}
          fill="rgba(255, 255, 255, 0.7)"
          stroke="black"
          strokeWidth={1}
          rotation={wedgeRotation}
        />
        <Text
          text={text}
          fontSize={12}
          fontFamily="Arial"
          fill="#29493D"
          align="center"
          verticalAlign="middle"
          width={110}
          x={textX}
          y={textY}
          offsetX={60}
          offsetY={9}
          rotation={textAngle}
        />
      </Group>
    )
  }

  const handleClick = () => {
    setCounter((prevCount) => prevCount + 1)
  }

  const wheelRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    if (!stageRef.current) return

    let angularSpeed = 20
    const angularFriction = 0.4
    let activeWedge = null

    const anim = new Konva.Animation((frame) => {
      const angularVelocityChange =
        (angularSpeed * frame.timeDiff * (1 - angularFriction)) / 1000
      angularSpeed = angularSpeed -= angularVelocityChange

      const angleDiff = (frame.timeDiff * angularSpeed) / 1000

      if (wheelRef.current) {
        wheelRef.current.rotate(angleDiff)
      }

      if (selectedItems.length >= 2 && stageRef.current) {
        const shape = stageRef.current.getIntersection({
          x: stageRef.current.width() / 2 - 20,
          y: stageRef.current.height() / 2 - 120,
        })

        const group = shape.findAncestor("Group")
        const wedgeShape =
          shape.getClassName() === "Wedge"
            ? shape
            : group.findOne("Wedge") ?? null

        if (angleDiff < 0.001) {
          const itemName = shape.parent.children[1].attrs.text
          setLuckyItem(itemName)
          anim.stop()
        }

        if (activeWedge && activeWedge !== wedgeShape) {
          activeWedge.fill("rgba(255, 255, 255, 0.7)")
        }

        if (wedgeShape && wedgeShape !== activeWedge) {
          wedgeShape.fill("rgba(214, 211, 209, 0.8)")
          activeWedge = wedgeShape
        }
      }
    })

    anim.start()

    return () => {
      anim.stop()
    }
  }, [counter, selectedItems])

  useEffect(() => {
    selectLuckyItem(luckyItem)
  }, [luckyItem])

  return (
    <>
      <Stage width={window.innerWidth} height={300} ref={stageRef}>
        <Layer>
          <Group x={window.innerWidth / 2 - 16} y={150} ref={wheelRef}>
            {selectedItems.map((item, index) => {
              return addWedges(index, selectedItems.length, item.name)
            })}
          </Group>
          <Group
            x={window.innerWidth / 2 - 16}
            y={150}
            onClick={handleClick}
            onTap={handleClick}
          >
            <Wedge
              y={-38}
              radius={30}
              angle={(2 * Math.PI) / 6}
              fill="#cf5732"
              stroke="#29493D"
              strokeWidth={0}
              rotation={(2 * Math.PI) / 6}
            />
            <Circle
              radius={20}
              fill="#cf5732"
              stroke="#29493D"
              strokeWidth={0}
            />
            <Text
              x={-40}
              y={-8}
              text="Spin"
              fontSize={14}
              fontFamily="Arial"
              fill="rgb(255, 255, 255)"
              width={80}
              align="center"
              padding={0}
            />
          </Group>
        </Layer>
      </Stage>
    </>
  )
}
