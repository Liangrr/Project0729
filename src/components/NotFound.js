import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center font-bold h-full">
      <div>
        <pre
          className="overflow-visible text-gray-400"
          style={{
            fontFamily: 'monospace',
            lineHeight: 1.2,
            fontWeight: 100,
          }}
        >
          {`
 _  _      ___    _  _
| || |    / _ \\  | || |
| || |_  | | | | | || |_
|__   _| | | | | |__   _|
   | |   | |_| |    | |
   |_|    \\___/     |_|`}
        </pre>
        <div className="text-center mb-[24vh]">
          <p className="text-gray-400 mt-6">页面未找到</p>
          <div className="mt-3">
            <small>
              <Link to="/">返回首页</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
