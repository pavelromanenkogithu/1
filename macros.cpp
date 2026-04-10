#pragma once

// Target platform: Windows 10+ (Windows 11 compatible)

#ifndef WINVER
#define WINVER 0x0A00
#endif

#ifndef _WIN32_WINNT
#define _WIN32_WINNT 0x0A00
#endif

// Legacy compatibility (deprecated)
#ifndef _WIN32_WINDOWS
#define _WIN32_WINDOWS 0x0A00
#endif

#ifndef _WIN32_IE
#define _WIN32_IE 0x0A00
#endif
