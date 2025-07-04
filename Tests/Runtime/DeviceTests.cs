using NUnit.Framework;

namespace BananaParty.WebUtility.Tests
{
    public class DeviceTests
    {
        [Test]
        public void IsMobileShouldReturnFalse()
        {
            Assert.IsFalse(Device.IsMobile);
        }
    }
}
